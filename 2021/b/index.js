Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = (x = 0, y = 0, s = '') => {

  s = s.replace(/\?/g, '');
  //console.log(s);
	//console.log((s.match(/JC/g) || []).length);
  //console.log((s.match(/CJ/g) || []).length);
  //console.log({'x': x, 'y': y, 's': s});

  var  cost = ((s.match(/CJ/g) || []).length * x) + ((s.match(/JC/g) || []).length * y);

	return cost;
};

const solveInputs = inputs => {
	const cases = [];
	inputs.slice(1).forEach((data, i) => {
    var parts = data.split(' ');
		cases.push(`Case #${i.toCase()}: ${solve(parts[0], parts[1], parts[2])}`);
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
};
