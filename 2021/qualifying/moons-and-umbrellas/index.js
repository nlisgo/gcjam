Number.prototype.toCase = function () {
    return this.valueOf()+1;
};

const solve = (costCJ, costJC, s) => {
    const splits = splitS(s).map(split => {
        return cheapestOption(options(split), costCJ, costJC)[1];
    });

    return splits.reduce((a, b) => a + b, 0);
};

const splitS = s => {
    const reg = /((^|[^\?])\?+([^\?]|$)|(^|[\?])[^\?]+([\?]|$))/g;
    const matches = [];
    let found;
    while (found = reg.exec(s)) {
        matches.push(found[0]);
        reg.lastIndex = found.index+1;
    }

    return matches.map((m, i) => {
        if (i === 0 && m.match(/^[^\?]+\?/g)) {
            return m.replace(/\?$/g, '');
        }

        if (m.match(/^\?[^\?]+\?$/g)) {
            return m.replace(/(^\?|\?$)/g, '');
        }

        if (i === matches.length - 1 && m.match(/\?[^\?]+$/g)) {
            return m.replace(/^\?/g, '');
        }

        return m;
    });
};

const restoreS = split => {
    return split.join('|').replace(/\|./g, '');
};

const options = s => {
    const len = (s.match(/\?/g) || []).length;

    return [
        s.replace(/\?+/g, 'C'.repeat(len)),
        s.replace(/\?+/g, 'J'.repeat(len)),
        s.replace(/\?+/g, 'CJ'.repeat(len).substring(0, len)),
        s.replace(/\?+/g, 'JC'.repeat(len).substring(0, len)),
    ].filter((v, i, a) => a.indexOf(v) === i);
};

const cheapestOption = (options, costCJ, costJC) => {
    let cheapO = options[0];
    let cheap = optionCost(cheapO, costCJ, costJC);

    if (options.length > 1) {
        for (let i = 1; i < options.length; i++) {
            let compareCost = optionCost(options[i], costCJ, costJC);
            if (compareCost < cheap) {
                cheap = compareCost;
                cheapO = options[i];
            }
        }
    }
    return [cheapO, cheap];
};

const optionCost = (option, costCJ, costJC) => ((option.match(/CJ/g) || []).length * costCJ) + ((option.match(/JC/g) || []).length * costJC);

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
    options,
    splitS,
    optionCost,
    cheapestOption,
    restoreS,
};
