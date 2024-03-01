const fs = require('fs');

function generateOutput(trips) {
    let output = '';
  
    Object.keys(trips).forEach((droneName) => {
      output += `${droneName}\n`;
  
      trips[droneName].forEach((trip, index) => {
        output += `Trip #${index + 1}\n`;
        output += trip.map((location) => `${location.substring(0, 11)}`).join(', ') + '\n';
      });
  
      output += '\n';
    });
  
    fs.writeFileSync('./data/output.txt', output, 'utf8');
}

module.exports = { generateOutput }