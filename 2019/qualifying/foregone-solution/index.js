Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = input => {
    let A = input.split('');
    let B = [];
    A.forEach((v, k) => {
        if (v == '4') {
            A[k] -= '1';
            B.push('1');
        }
        else {
            B.push('0');
        }
    });

    return [A.join(''), B.join('').replace(/^0+/, '')].join(' ');
};

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
};
