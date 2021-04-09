Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const scorePerson = answers => score(answers);
const scoreQuestion = answers => score(answers);

const score = answers => scoreCount(answers) / answers.length;

const scoreCount = answers => answers.reduce((score, x) => (x == 1 ? score + 1 : score), 0);

const transpose = array => array[0].map((r, i) => array.map(c => c[i]));

const sigmoid = t => (1 / (1 + Math.pow(Math.E, -t)));

const solve = input => {
	const scoresPerson = input.map((row, i) => {
		return {
			p: i,
			score: scorePerson(row),
			rating: 0,
			sig: 1,
		};
	})
	.sort((a, b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0));

	let scoresQuestion = [...transpose(input)].map((col, i) => {
		return {
			q: i,
			score: scoreQuestion(col),
			rating: 0,
		};
	}).sort((a, b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0));

	const rating = 3;
	for (let i = 0; i < scoresQuestion.length; i++) {
		scoresQuestion[i].rating = rating - ((i * rating * 2) / (scoresQuestion.length - 1));
	}

	for (let i = 0; i < scoresPerson.length; i++) {
		scoresPerson[i].rating = rating - ((i * rating * 2) / (scoresPerson.length - 1));
		for (let j = 0; j < 100; j++) {
			let sig = sigmoid(scoresPerson[i].rating - scoresQuestion[j].rating);
			scoresPerson[i].sig *= (input[scoresPerson[i].p] === '1') ? sig : 1 - sig;
		}
	}

	const sigsPerson = [...scoresPerson.sort((a, b) => (a.sig > b.sig) ? 1 : ((b.sig > a.sig) ? -1 : 0))];

	return sigsPerson[0].p + 1;
};

const solveInputs = inputs => {
	const cases = [];
	const rows = [];
	let row = [];
	for (let i = 2; i < inputs.length; i++) {
		row.push(inputs[i].split(''));
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
