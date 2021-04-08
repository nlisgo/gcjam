Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const scorePerson = answers => score(answers);
const scoreQuestion = answers => score(answers);

const score = answers => scoreCount(answers) / answers.length;

const scoreCount = answers => answers.reduce((score, x) => (x == 1 ? score + 1 : score), 0);

const transpose = array => array[0].map((r, i) => array.map(c => c[i]));

const indexOfMaxValue = a => a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

const solve = input => {
	const scoresPerson = input.map(row => scorePerson(row.split('')));
	// const scoresQuestion = [...transpose(input.map(row => row.split('')))].map(scoreQuestion);

	return indexOfMaxValue(scoresPerson) + 1;
};

const solveInputs = inputs => {
	const cases = [];
	const rows = [];
	let row = [];
	for (let i = 2; i < inputs.length; i++) {
		row.push(inputs[i]);
		if (row.length === 100) {
			rows.push(row);
			row = [];
		}
	}
	rows.forEach((data, i) => {
		cases.push(`Case #${i.toCase()}: ${solve(data)}`);
	});
	return cases;
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
	scorePerson,
	scoreQuestion,
	transpose,
};
