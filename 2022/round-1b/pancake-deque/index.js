/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => input.slice(1).filter((_, i) => i % 2).map(i => i.split(' ').map(Number));

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    let maxD = 0;
    let countR = 0;
    let charge = 0;
    for (let i = 0; i < input.length - countR; i++) {
        if (input[i] < maxD) {
            continue;
        }

        while (input[input.length - countR - 1] < maxD) {
            countR++;
            continue;
        }

        while (input[input.length - countR - 1] < input[i]) {
            if (input[input.length - countR - 1] >= maxD) {
                maxD = input[input.length - countR - 1];
                charge++;
            }
            countR++;
        }

        maxD = input[i];
        charge++;
    }

    return charge;
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
	splitInput,
	solve,
	solveInputs,
};
