const fs = require('fs');


function readSonarSweep(filename) {
    try {
       
        const data = fs.readFileSync(filename, 'utf8');
        
       
        return data.trim().split('\n').map(line => parseInt(line));
    } catch (err) {
        console.error(`Error reading input file: ${err}`);
        return [];
    }
}

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

// This is the path to your input file
const inputFile = 'input.txt';

// parsing  the depth measurements
const depths = readSonarSweep(inputFile);

// Count the number of depth measurements > the previous measurement
const increasingDepthsCount = countIncreasingDepths(depths);

console.log("Number of measurements larger than the previous measurement:", increasingDepthsCount);
