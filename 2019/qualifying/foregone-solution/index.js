const solve = input => [checkA(input), checkB(input)].join(' ');
const solveInputs = inputs => inputs.slice(1).map(solve).map((c, i) => `Case #${i+1}: ${c}`);

const checkA = input => input.replaceAll(/4/g, '3');
const checkB = input => input.replaceAll(/4/g, 'x').replaceAll(/[^x]/g, '0').replace(/^[0]+/, '').replaceAll(/[x]/g, '1');

if (!Boolean(process.stdin.isTTY)) {
    const lines = [];
    require('readline').createInterface({
        input: process.stdin,
    }).on('line', line => {
        lines.push(line);
    }).on('close', () => {
        solveInputs(lines).forEach(line => {
            console.log(line);
        });
    });
}

module.exports = {
    solve,
    solveInputs,
    checkA,
    checkB,
};
