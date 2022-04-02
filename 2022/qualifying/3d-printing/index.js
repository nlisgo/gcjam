/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    const cases = [];
    for (let i = 0; i < input.slice(1).length; i += 3) {
        cases.push([
            input[i+1].split(' ').map(Number),
            input[i+2].split(' ').map(Number),
            input[i+3].split(' ').map(Number),
        ]);
    }

    return cases;
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {        
    [printer1, printer2, printer3] = [...input];

    minL = minLevels(input);

    if (minL.reduce((a, c) => a +c) < 1000000) {
        return 'IMPOSSIBLE';
    }

    let target = 1000000;
    const solution = [];

    minL.forEach(l => {
        if (target > l) {
            solution.push(l);
        } else if (target > 0) {
            solution.push(target);
        } else {
            solution.push(0);
        }

        target -= l;
    });

	return solution.join(' ');
};

/**
 * For all printers return minimum levels for all ink.
 */
const minLevels = printers => {
    let c = -1;
    let m = -1;
    let y = -1;
    let k = -1;

    printers.forEach(printer => {
        if (c < 0 || printer[0] < c) {
            c = printer[0];
        }
        if (m < 0 || printer[1] < m) {
            m = printer[1];
        }
        if (y < 0 || printer[2] < y) {
            y = printer[2];
        }
        if (k < 0 || printer[3] < k) {
            k = printer[3];
        }
    });

    return [c, m, y, k];
};

const ink = printer => printer.reduce((a, c) => a + c);

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
    minLevels,
	splitInput,
	solve,
	solveInputs,
};
