Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = (x, y, s) => {
    const newS = prepareMoonsAndUmbrellas(s, x, y);

    return ((newS.replace(/\?/g, '').match(/CJ/g) || []).length * x) + ((newS.replace(/\?/g, '').match(/JC/g) || []).length * y);
};

const prepareMoonsAndUmbrellas = (s, x, y) => {
    if (x >= 0 && y >= 0) {
        return s.replace(/\?/g, '');
    }

    let newS = s;

    if (x < 0 || y < 0) {
        if (x === Math.min(x, y)) {
            newS = newS.replace(/(\?J|C\?|\?\?)/g, 'CJ');
            if (y < 0) {
                newS = newS.replace(/(\?C|J\?)/g, 'JC');
            }
        } else {
            newS = newS.replace(/(\?C|J\?|\?\?)/g, 'JC');
            if (x < 0) {
                newS = newS.replace(/(\?J|C\?)/g, 'CJ');
            }
        }
    }

    return newS;
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
