Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const scorePerson = answers => score(answers);
const scoreQuestion = answers => score(answers);

const score = answers => scoreCount(answers) / answers.length;

const scoreCount = answers => answers.reduce((score, x) => (x == 1 ? score + 1 : score), 0);

const transpose = array => array[0].map((r, i) => array.map(c => c[i]));

const solve = input => {
	const scoresPerson = input.map((row, i) => {
		return {
			p: i,
			score: scorePerson(row),
			percentageOfHardest: 0,
			percentageOfEasiest: 0,
			diffHardestEasiest: 0,
		};
	});

	let scoresQuestion = [...transpose(input)].map((col, i) => {
		return {
			q: i,
			score: scoreQuestion(col),
		};
	})
	.sort((a, b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0));

	const hardestQuestions = [];
	for (let i = 0; i < Math.ceil(scoresQuestion.length * .05); i ++) {
		hardestQuestions.push(scoresQuestion[i]);
	}

	const easiestQuestions = [];
	for (let i = 0; i < Math.ceil(scoresQuestion.length * .05); i ++) {
		easiestQuestions.push(scoresQuestion[scoresQuestion.length - 1 - i]);
	}
	
	for (let i = 0; i < scoresPerson.length; i++) {
		let h = 0;
		let e = 0
		for (let j = 0; j < hardestQuestions.length; j++) {
			h += Number(input[i][hardestQuestions[j].q]);
		}
		for (let j = 0; j < easiestQuestions.length; j++) {
			e += Number(input[i][easiestQuestions[j].q]);
		}
		scoresPerson[i].percentageOfHardest = h / hardestQuestions.length;
		scoresPerson[i].percentageOfEasiest = e / easiestQuestions.length;
		scoresPerson[i].diffHardestEasiest = scoresPerson[i].percentageOfEasiest - scoresPerson[i].percentageOfHardest;
	}

	return scoresPerson.sort((a, b) => (a.diffHardestEasiest > b.diffHardestEasiest) ? 1 : ((b.diffHardestEasiest > a.diffHardestEasiest) ? -1 : 0))[0].p + 1;
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
