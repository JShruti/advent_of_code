const fs = require('fs');

// Function to read the input file and parse depth measurements
function readSonarSweep(filename) {
    try {
        // Read the content of the file
        const data = fs.readFileSync(filename, 'utf8');
        
        // Split the content by newline character and parse each line as a number
        return data.trim().split('\n').map(line => parseInt(line));
    } catch (err) {
        console.error(`Error reading input file: ${err}`);
        return [];
    }
}

// Function to count the number of depth measurements larger than the previous measurement
function countIncreasingDepths(depths) {
    let count = 0;
    let prevDepth = depths[0];

    for (let i = 1; i < depths.length; i++) {
        if (depths[i] > prevDepth) {
            count++;
        }
        prevDepth = depths[i];
    }

    return count;
}

// Path to your input file
const inputFile = 'input.txt';

// Read sonar sweep report and parse depth measurements
const depths = readSonarSweep(inputFile);

// Count the number of depth measurements larger than the previous measurement
const increasingDepthsCount = countIncreasingDepths(depths);

console.log("Number of measurements larger than the previous measurement:", increasingDepthsCount);
