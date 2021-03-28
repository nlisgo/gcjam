Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = (len, cost) => {
	if (!possible(len, cost)) {
		return ['IMPOSSIBLE'];
	}

	const right = [];
	const left = [];

	let remaining = range(1, len);
	let costRemaining = cost;

	while (costRemaining > 0) {
		if (costRemaining === remaining.length - 1) {
			costRemaining = 0;
		} else if (costRemaining >= remaining.length * 2 - 2) {
			costRemaining -= remaining.length;
			if (right.length === left.length) {
				right.push(remaining[0]);
				remaining = [...remaining.slice(1).reverse()];
			} else {
				left.push(remaining[remaining.length - 1]);
				remaining = [...remaining.reverse().slice(1)];
			}
		} else {
			let costForThisOperation = costRemaining - remaining.length + 2;
			remaining = [...remaining.slice(0, costForThisOperation).reverse()].concat([...remaining.reverse().slice(0, remaining.length - costForThisOperation).reverse()]);
			costRemaining = 0;
		}
	}

	return left.concat(remaining, right.reverse());
};

const solveInputs = inputs => {
	const cases = [];
	inputs.slice(1).forEach((data, i) => {
		cases.push(`Case #${i.toCase()}: ${solve(...data.split(' ').map(Number)).join(' ')}`);
	});
	return cases;
};

const possible = (len, cost) => Boolean(cost >= len - 1 && cost < (len + 1) * len * 0.5);

const range = (start, end) => [...new Array(end-start+1).fill().map((el, ind) => ind + start)];

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
	possible,
	range,
};
