const fs = require('fs');


function readCommands(filename) {
    try {
       
        const data = fs.readFileSync(filename, 'utf8');
        
       
        return data.trim().split('\n');
    } catch (err) {
        console.error(`Error reading input file: ${err}`);
        return [];
    }
}


function calculateFinalPositionAndDepth(commands) {
    let horizontalPosition = 0;
    let depth = 0;

    for (const command of commands) {
        const [action, value] = command.split(' ');
        const intValue = parseInt(value);

        if (action === 'forward') {
            horizontalPosition += intValue;
        } else if (action === 'down') {
            depth += intValue;
        } else if (action === 'up') {
            depth -= intValue;
        }
    }

    return { horizontalPosition, depth };
}

// input file
const inputFile = 'input2.txt';


const commands = readCommands(inputFile);

// Calculation of horizontal position and depth
const { horizontalPosition, depth } = calculateFinalPositionAndDepth(commands);

// Calculating result by multiplying final horizontal position by final depth
const result = horizontalPosition * depth;

console.log("Result:", result);
