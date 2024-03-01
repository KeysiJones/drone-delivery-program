function calculateTripWeight(trip) {
    return trip.reduce((totalWeight, delivery) => {
      const extractedDeliveryWeight = delivery.substring(12);
      return totalWeight + Number(extractedDeliveryWeight);
    }, 0);
}

module.exports = { calculateTripWeight }