/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => input.slice(1);

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    const splits = splitByLetter(input);

    if (splits.length === 1) {
        return splits.join('');
    }

    return splits.map((e, i) => {
        if (i < splits.length - 1 && letterPos(e) < letterPos(splits[i+1])) {
            return e + e;
        }

        return e;
    }).join('');
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

const letterPos = needle => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(needle.charAt(0));

const splitByLetter = word => {
    const wordArr = word.split('');
    const splits = [];
    let curr = '';

    wordArr.forEach((e, i) => {
        curr += e;
        if (i === wordArr.length - 1 || wordArr[i+1] !== e) {
            splits.push(curr);
            curr = '';
        }
    });

    return splits;
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
    letterPos,
    splitByLetter,
	splitInput,
	solve,
	solveInputs,
};
