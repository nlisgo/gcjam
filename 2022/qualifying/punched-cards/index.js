/**
 * Punch Cards
 * 
 * See: https://codingcompetitions.withgoogle.com/codejam/round/0000000000876ff1/0000000000a4621b
 */

/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => input.slice(1).map(i => i.split(' ').map(Number));

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    [r, c] = [...input];

    let z = '+';
    let y = '|';
    for (let i = 0; i < c; i++) {
        z += '-+';
        y += '.|';
    }

    const card = [
        '..'+z.substring(2),
        '..'+y.substring(2),
    ];

    for (let i = 0; i < r-1; i++) {
        card.push(z);
        card.push(y);
    }

    card.push(z);

	return card.join("\n");
};

/**
 * Accepts all lines of input and prepares all solutions.
 */
const solveInputs = inputs => {
	const cases = [];
	splitInput(inputs).forEach((data, i) => {
		cases.push(`Case #${i+1}:
${solve(data)}`);
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
