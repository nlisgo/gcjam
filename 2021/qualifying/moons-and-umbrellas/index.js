Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = (costCJ, costJC, s) => {
    const newS = prepareMoonsAndUmbrellas(s, costCJ, costJC);

    return ((newS.match(/CJ/g) || []).length * costCJ) + ((newS.match(/JC/g) || []).length * costJC);
};

const prepareMoonsAndUmbrellas = (s, costCJ, costJC) => {
    let newS = s;

    if (costCJ < 0 || costJC < 0) {
        if (costCJ === Math.min(costCJ, costJC)) {
            newS = newS.replace(/(\?J|C\?|\?\?)/g, 'CJ');
            if (costJC < 0) {
                newS = newS.replace(/(\?C|J\?)/g, 'JC');
            }
        } else {
            newS = newS.replace(/(\?C|J\?|\?\?)/g, 'JC');
            if (costCJ < 0) {
                newS = newS.replace(/(\?J|C\?)/g, 'CJ');
            }
        }
    }

    return newS.replace(/\?/g, '');
};

const solveInputs = inputs => {
    const cases = [];
    inputs.slice(1).forEach((data, i) => {
        cases.push(`Case #${i.toCase()}: ${solve(...data.split(' ').map(i => {
            if (!isNaN(i)) {
                return Number(i);
            }

            return i;
        }))}`);
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
    prepareMoonsAndUmbrellas,
};
