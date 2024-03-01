# Drone Delivery Program

## Overview
The Drone Delivery Program is a tool designed to optimize the assignment of deliveries to drones for efficient and cost-effective delivery operations. By intelligently sorting deliveries and drones based on weight and capacity, respectively, the program aims to minimize the number of trips required while maximizing the payload carried by each drone.

## Usage
1. **Input File**: Prepare an input file (`input.txt`) containing the details of drones and deliveries. Each line should represent either a drone or a delivery, with specific formatting as follows:
    - Drones: Lines starting with `[Drone` indicate drone specifications, including name and capacity enclosed in square brackets. For example: `[DroneA], [100]`.
    - Deliveries: Lines starting with `[Location` represent delivery locations and their respective weights, also enclosed in square brackets. For example: `[LocationA], [20]`.

2. **Running the Program**: Execute the `main()` function in the `index.js` file to run the program. Ensure that Node.js is installed on your system. Run the following command in the terminal:
    ```
    node ./index.js
    ```

3. **Output**: After execution, the program will generate an output file (`output.txt`) containing the organized assignments of deliveries to drones. Each section in the output file corresponds to a drone and its assigned deliveries.

## Example
For a better understanding of the input and output formats, consider the following example:

**Input (`input.txt`)**:

[DroneA], [100],
[DroneB], [150],

[LocationA], [20]
[LocationB], [30]
[LocationC], [40]

**Output (`output.txt`)**:

[DroneA]

Trip #1

[LocationC], [LocationB]

[DroneB]

Trip #1

[LocationA]

In this example, DroneA carries LocationC and LocationB in a single trip, while DroneB handles LocationA in a separate trip.

## Notes
- Ensure that the input file follows the specified format to avoid errors in parsing.
- The program is designed to handle a maximum of 100 drones, as per business requirements.