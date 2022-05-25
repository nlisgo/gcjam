/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => input.slice(1).filter((_, i) => i % 2).map(i => i.split(' ').map(Number));

const orderPancakes = pancakes => {
    const ordered = [];
    while (pancakes.length > 0) {
        if (pancakes.length === 1) {
            ordered.push(pancakes[0]);
            pancakes = [];
        } else if (pancakes[0] < pancakes[pancakes.length - 1]) {
            ordered.push(pancakes[0]);
            pancakes = [...pancakes.slice(1)];
        } else {
            ordered.push(pancakes[pancakes.length - 1]);
            pancakes = [...pancakes.slice(0, -1)];
        }
    }

    return ordered;
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    const ordered = orderPancakes(input);
    let count = 1;
    let max = ordered[0];

    ordered.slice(1).forEach(p => {
        if (p >= max) {
            count++;
            max = p;
        }
    });

    return count;
};

/**
 * Accepts all lines of input and prepares all solutions.
 */
const solveInputs = inputs => {
	const cases = [];
	splitInput(inputs).forEach((data, i) => {
		cases.push(`Case #${i+1}: ${solve(data)}`);
	});
	return cases;
};

/**
 * If stdin is detected then pass all lines to solveInputs.
 * 
 * Send results to stdout.
 */
if (!Boolean(process.stdin.isTTY)) {
    const lines = [];
    require('readline').createInterface({
        input: process.stdin,
    }).on('line', line => {
        lines.push(line);
    }).on('close', () => {
        solveInputs(lines).forEach(line => {
            console.log(line);
        });
    });
}

/**
 * Export all functions that we want to test.
 */
module.exports = {
    orderPancakes,
	splitInput,
	solve,
	solveInputs,
};
