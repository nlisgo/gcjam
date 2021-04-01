const readline = require('readline');

const rl = readline.createInterface(process.stdin);

let [T, N, Q] = [0, 0, 0];
const answersGiven = [];
let organise = [];
let centreIndex = 1;
let positionIndex = 0;
let queries = [];
let response;
let valueToPlace = 0;
let valuesToPlace = [];
let valuePlaced = false;

const postQuery = values => {
    queries.push(values);
    console.log(values.join(' '));
};

const postAnswer = answer => {
    answersGiven.push(answer.join(' '));
    console.log(answer.join(' '));
};

rl.on('line', (line) => {
    if (T === 0) {
        [T, N, Q] = line.split(' ').map(Number);
    }

    if (answersGiven.length < T) {
        if (queries.length === 0) {
            postQuery([1, 2, 3]);
            valueToPlace = 4;
            valuesToPlace = [...Array(N - 4).fill().map((_, i) => i + 5)];
            valuePlaced = false;
        } else {
            response = Number(line);
            if (queries.length === 1) {
                organise = [...queries[0].filter(item => item !== response)];
                organise.push(organise[1]);
                organise[1] = response;
                centreIndex = 1;
                positionIndex = 0;
                postQuery([organise[centreIndex], organise[positionIndex], valueToPlace]);
            } else {
                if (response === queries[queries.length - 1][2]) {
                    if (positionIndex < centreIndex) {
                        // valueToPlace in positionIndex + 1
                        organise = organise.slice(0, positionIndex + 1).concat([valueToPlace], organise.slice(positionIndex + 1));
                        valuePlaced = true;
                    } else {
                        // valueToPlace in positionIndex - 1
                        organise = organise.slice(0, positionIndex).concat([valueToPlace], organise.slice(positionIndex));
                        valuePlaced = true;
                    }
                } else if (response === queries[queries.length - 1][1]) {
                    if (positionIndex === 0) {
                        // valueToPlace at 0
                        organise = [valueToPlace].concat(organise);
                        valuePlaced = true;
                    } else if (positionIndex === organise.length - 1) {
                        // valueToPlace at end
                        organise = organise.concat([valueToPlace]);
                        valuePlaced = true;
                    } else {
                        if (positionIndex < centreIndex) {
                            positionIndex--;
                        } else {
                            positionIndex++;
                        }
                    }
                } else if (response === queries[queries.length - 1][0]) {
                    if (positionIndex < centreIndex) {
                        positionIndex = centreIndex + 1;
                    } else {
                        positionIndex = centreIndex - 1;
                    }
                }
    
                if (organise.length < N) {
                    if (valuePlaced) {
                        centreIndex = Math.floor(organise.length / 2);
                        positionIndex = centreIndex - 1;
                        valueToPlace = valuesToPlace[0];
                        valuesToPlace = [...valuesToPlace.slice(1)];
                        valuePlaced = false;
                    }
    
                    postQuery([organise[centreIndex], organise[positionIndex], valueToPlace]);
                } else {
                    postAnswer(organise);
                    queries = [];
                }
            }
        }
    } else {
        rl.close();
    }
}).on('close', () => {
    process.exit(0);
});
