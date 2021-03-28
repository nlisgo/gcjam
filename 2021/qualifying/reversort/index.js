Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = input => {
	let cost = 0;
	let minPos = 0;
	for (let i = 0; i < input.length - 1; i++) {
		minPos = positionOfMinimum(input.slice(i));
		cost += minPos + 1;
		input = performReverse(input, i, i + minPos);
	}
	return cost;
};

const solveInputs = inputs => {
	const cases = [];
	let i = 0;
	inputs.slice(1).forEach((data) => {
		if (data.split(' ').length > 1) {
			cases.push(`Case #${i.toCase()}: ${solve(data.split(' ').map(Number))}`);
			i++;
		}
	});
	return cases;
};

const positionOfMinimum = values => values.indexOf(Math.min(...values));

const performReverse = (values, i, j) => {
	if (j === i) {
		return values;
	}

	const newValues = (i > 0) ? values.slice(0, i) : [];

	for (let k = j; k >= i; k--) {
		newValues.push(values[k]);
	}

	if (j < values.length - 1) {
		for (let k = j + 1; k < values.length; k++) {
			newValues.push(values[k]);
		}
	}

	return newValues;
};

const handleStdin = () => {
	const readline = require('readline');
	
	const inputs = [];
	
	const rl = readline.createInterface({
	  input: process.stdin
	});
	
	rl.on('line', line => {
		inputs.push(line);
	}).on('close', () => {
		solveInputs(inputs).forEach(out => {
			console.log(out);
		});
	});
};

if (!Boolean(process.stdin.isTTY)) {
	handleStdin();
}

module.exports = {
	solve,
	solveInputs,
	positionOfMinimum,
	performReverse,
};
