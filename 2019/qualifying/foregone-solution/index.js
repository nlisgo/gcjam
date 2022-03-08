Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = input => [checkA(input), checkB(input)].join(' ');

const checkA = input => input.replaceAll(/4/g, '3');
const checkB = input => input.replaceAll(/4/g, 'x').replaceAll(/[^x]/g, '0').replace(/^[0]+/, '').replaceAll(/[x]/g, '1');

const solveInputs = inputs => {
	const cases = [];
	let i = 0;
	inputs.slice(1).forEach((data) => {
        cases.push(`Case #${i.toCase()}: ${solve(data)}`);
		i++;
	});
	return cases;
};

const handleStdin = () => {
	const readline = require('readline');
	const inputs = [];

	const rl = readline.createInterface({
	    input: process.stdin,
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
    checkA,
    checkB,
};
