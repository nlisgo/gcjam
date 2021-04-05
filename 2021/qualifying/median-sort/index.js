const readline = require('readline');

const rl = readline.createInterface(process.stdin);

let [T, N, Q] = [0, 0, 0];
const answersGiven = [];
let organise = [];
let positionIndex = 0;
let queries = [];
let quarterQueries = [];
let response;
let valueToPlace = 0;
let valuesToPlace = [];
let valuePlaced = false;
let findQuarter = false;

const postQuery = values => {
    queries.push(values);
    console.log(values.join(' '));
};

const postAnswer = answer => {
    answersGiven.push(answer.join(' '));
    console.log(answer.join(' '));
};

const getQuarterQuery = () => {
    const nextQuery = quarterQueries[0];
    quarterQueries = quarterQueries.slice(1);
    return nextQuery;
};

rl.on('line', (line) => {
    if (T === 0) {
        [T, N, Q] = line.split(' ').map(Number);
    }

    if (answersGiven.length < T) {
        if (queries.length === 0) {
            postQuery([1, 2, 3]);
            positionIndex = 0;
            valueToPlace = 4;
            valuesToPlace = [...Array(N - 4).fill().map((_, i) => i + 5)];
            valuePlaced = false;
        } else {
            response = Number(line);
            if (queries.length === 1) {
                organise = [...queries[0].filter(item => item !== response)];
                organise.push(organise[1]);
                organise[1] = response;
                postQuery([organise[positionIndex], organise[positionIndex + 1], valueToPlace]);
            } else {
                if (findQuarter) {
                    if (false && response === queries[queries.length - 1][0]) {
                        throw new Error(organise);
                        throw new Error(queries[queries.length - 1][0]);
                        throw new Error(organise.slice(0, organise.indexOf(queries[queries.length - 1][0])));
                    } else if (response === queries[queries.length - 1][4]) {
                        findQuarter = false;
                        positionIndex = organise.indexOf(queries[queries.length - 1][0]) - 2;
                    } else if (quarterQueries.length === 1) {
                        findQuarter = false;
                        positionIndex = organise.indexOf(getQuarterQuery()[0]) - 2;
                    }
                } else {
                    if (response === queries[queries.length - 1][0]) {
                        // valueToPlace just before positionIndex
                        organise = organise.slice(0, positionIndex).concat([valueToPlace], organise.slice(positionIndex));
                        valuePlaced = true;
                    } else if (response === queries[queries.length - 1][2]) {
                        // valueToPlace just after positionIndex
                        organise = organise.slice(0, positionIndex + 1).concat([valueToPlace], organise.slice(positionIndex + 1));
                        valuePlaced = true;
                    } else if (organise.length === positionIndex + 2) {
                        // valueToPlace at end
                        organise = organise.concat([valueToPlace]);
                        valuePlaced = true;
                    }
                }
    
                if (organise.length < N) {
                    if (valuePlaced) {
                        positionIndex = 0;
                        valueToPlace = valuesToPlace[0];
                        valuesToPlace = [...valuesToPlace.slice(1)];
                        valuePlaced = false;
                        if (organise.length > 11) {
                            findQuarter = true;
                            quarterQueries = [];
                            let gap = Math.floor(organise.length / 4) - 1;
                            for (let i = 0; i < 4; i++) {
                                quarterQueries.push([organise[gap * i + i], organise[(i < 3) ? gap * (i + 1) + i : organise.length - 1], valueToPlace]);
                            }
                        }
                    } else {
                        positionIndex += 2;
                    }

                    if (positionIndex >= organise.length - 1) {
                        positionIndex--;
                    }
    
                    if (findQuarter) {
                        postQuery(getQuarterQuery());
                    } else {
                        postQuery([organise[positionIndex], organise[positionIndex + 1], valueToPlace]);
                    }
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
