const { parseInput } = require('./src/parser');
const { sortDeliveriesByWeight } = require('./src/delivery');
const { assignDeliveriesToDrones } = require('./src/drone');
const { generateOutput } = require('./src/outputGenerator');

function main() {
  const inputFile = './data/input.txt';
  const { drones, deliveries } = parseInput(inputFile);
  const sortedDeliveries = sortDeliveriesByWeight(deliveries);
  const trips = assignDeliveriesToDrones(drones, sortedDeliveries);
  generateOutput(trips);
}

main();