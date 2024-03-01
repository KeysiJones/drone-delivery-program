function removeBracketsFromString(string) {
    return string.split('[').join('').split(']').join('');
}

function logDeliveryInfo(
    deliveryLocation,
    droneName,
    droneRemainingCapacity,
    isNewTrip
  ) {
    console.log(
      `${deliveryLocation} assigned to ${droneName}${
        isNewTrip ? ' in a new trip.' : '.'
      } Remaining drone capacity: ${droneRemainingCapacity}`
    );
}

module.exports = { removeBracketsFromString, logDeliveryInfo }

