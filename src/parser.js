const fs = require('fs');
const { removeBracketsFromString } = require('../utils/utils')

// Extracts data from the input file and organizes it into a list of drones and deliveries
function parseInput(filePath) {
    const input = fs.readFileSync(filePath, 'utf8').split('\n');
    const drones = [];
    const deliveries = [];
  
    input.forEach((line) => {
      const parts = line
        .trim()
        .split(',')
        .map((text) => text.trim());
  
      if (parts[0].startsWith('[Drone')) {
        parts.forEach((item, index) => {
          if (index % 2 === 0) {
            let name = item;
            let capacityText = parts[index + 1];
            let capacity = parseInt(removeBracketsFromString(capacityText));
            drones.push({ name, capacity, originalCapacity: capacity });
          }
        });
      } else if (parts[0].startsWith('[Location')) {
        const location = parts[0];
        const weight = parseInt(removeBracketsFromString(parts[1]));
        deliveries.push({ location, weight });
      }
    });
  
    return { drones, deliveries };
  }

  module.exports = { parseInput };