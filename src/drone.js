const { calculateTripWeight } = require('./tripCalculator');
const { logDeliveryInfo } = require('../utils/utils')

function assignDeliveriesToDrones(drones, deliveries) {
    const maxDrones = 100;
    const trips = {};
  
    // Limit the number of drones to 100 as required by business
    const limitedDrones = drones.slice(0, maxDrones);
  
    if (drones.length > maxDrones) {
      console.log(`Warning: Only ${maxDrones} drone(s) will be used since that is the maximum number of drones allowed`);
    }
  
    // Creates a key for each drone in the trips array so each drone has a place for it's deliveries
    limitedDrones.forEach((drone) => {
      trips[drone.name] = [];
    });
  
    // Sort drones by capacity in descending order
    const sortedDrones = limitedDrones.sort((a, b) => b.capacity - a.capacity);
  
    deliveries.forEach((delivery) => {
      let isDeliveryAssigned = false;
  
      sortedDrones.forEach((drone) => {
        // If delivery is not assigned to any drone and we have enough capacity in the current drone, assign it to the current drone.
        if (!isDeliveryAssigned && delivery.weight <= drone.capacity) {
          let foundTrip = false; // Controls wether we found a trip to put the current delivery on or not
          // Tries to find a trip to put the delivery into and checks if the drone has enough capacity to fit the current delivery in the current trip
          for (const trip of trips[drone.name]) {
            if (calculateTripWeight(trip) + delivery.weight <= drone.originalCapacity) {
              trip.push(`${delivery.location}-${delivery.weight}`);
              drone.capacity -= delivery.weight;
              foundTrip = true;
              isDeliveryAssigned = true;
              logDeliveryInfo(delivery.location, drone.name, drone.capacity);
              break;
            }
          }
  
          if (!foundTrip) {
            if (delivery.weight <= drone.capacity) {
              trips[drone.name].push([`${delivery.location}-${delivery.weight}`]);
              drone.capacity -= delivery.weight;
              isDeliveryAssigned = true;
              logDeliveryInfo(
                delivery.location,
                drone.name,
                drone.capacity,
                true
              );
            }
          }
        }
      });
  
      // If the delivery couldn't be assigned to any drone initially, we find a drone for it.
      if (!isDeliveryAssigned) {
        let selectedDrone = null;
        limitedDrones.forEach((drone) => {
          // Once we find a drone, we assign it and there is no need to check for another drone.
          if (selectedDrone) return;
  
          // Refuel in order to be able to make a new delivery if drone's available capacity is less than 20%
          if (drone.capacity <= drone.originalCapacity * 0.2) {
            drone.capacity = drone.originalCapacity;
          }
  
          if (drone.capacity >= delivery.weight) {
            selectedDrone = drone;
          }
        });
  
        // Start a new trip with the selected drone
        if (selectedDrone) {
          trips[selectedDrone.name].push([`${delivery.location}-${delivery.weight}`]);
          selectedDrone.capacity -= delivery.weight;
          logDeliveryInfo(
            delivery.location,
            selectedDrone.name,
            selectedDrone.capacity,
            true
          );
        }
      }
    });
  
    return trips;
}

module.exports = { assignDeliveriesToDrones };