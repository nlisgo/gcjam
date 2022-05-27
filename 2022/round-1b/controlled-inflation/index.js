/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    const cases = [];
    const limit = Number(input.splice(0, 1));

    let customers = 0;
    while (cases.length < limit) {
        [customers] = input.splice(0, 1)[0].split(' ').map(Number);
        cases.push(input.splice(0, customers).map(products => products.split(' ').map(Number)));
    }

    return cases;
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    const limits = input.map((product, i) => {
        const max = Math.max(...product);
        const min = (i === 0) ? max : Math.min(...product);
        return [min, max];
    });

    let [shortestToLowest, shortestToHighest] = limits[0];

    limits.slice(1).forEach(([lowest, highest], i) => {
        const diff = highest - lowest;
        shortestToLowest += Math.min(...limits[i].map(prev => Math.abs(prev-lowest) + diff));
        shortestToHighest += Math.min(...limits[i].map(prev => Math.abs(prev-highest) + diff));
    });

    return Math.min(shortestToLowest, shortestToHighest);
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
