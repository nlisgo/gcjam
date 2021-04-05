const readline = require('readline');

const rl = readline.createInterface(process.stdin);

let [T, N, Q] = [0, 0, 0];
const answersGiven = [];
let organise = [];
let positionIndex = 0;
let queries = [];
let mostExpensive = {
    case: 0,
    sequence: '',
    queries: 0,
};
let sectionQueries = [];
let response;
let valueToPlace = 0;
let valuesToPlace = [];
let valuePlaced = false;
let findSection = false;
let sections = 2;

const postQuery = values => {
    queries.push(values);
    console.log(values.join(' '));
};

const postAnswer = answer => {
    answersGiven.push(answer.join(' '));
    console.log(answer.join(' '));
};

const getSectionQuery = () => {
    const sectionQuery = sectionQueries[0];
    sectionQueries = sectionQueries.slice(1);
    return sectionQuery;
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
                if (findSection) {
                    findSection = false;
                    if (response === queries[queries.length - 1][0]) {
                        positionIndex = -1;
                    } else if (response === queries[queries.length - 1][1]) {
                        positionIndex = organise.indexOf(queries[queries.length - 1][1]);
                    } else {
                        positionIndex = organise.indexOf(queries[queries.length - 1][0]);
                    }
                    positionIndex -= 1;
                } else {
                    if (response === queries[queries.length - 1][0]) {
                        // valueToPlace just before positionIndex
                        organise = organise.slice(0, positionIndex).concat(valueToPlace, organise.slice(positionIndex));
                        valuePlaced = true;
                    } else if (response === queries[queries.length - 1][2]) {
                        // valueToPlace just after positionIndex
                        organise = organise.slice(0, positionIndex + 1).concat(valueToPlace, organise.slice(positionIndex + 1));
                        valuePlaced = true;
                    } else if (organise.length === positionIndex + 2) {
                        // valueToPlace at end
                        organise = organise.concat(valueToPlace);
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
                            findSection = true;
                            sectionQueries = [];
                            let gap = Math.floor(organise.length / 3);
                            sectionQueries.push([organise[gap], organise[gap * 2], valueToPlace]);
                        }
                    } else {
                        positionIndex += 2;
                    }

                    if (positionIndex >= organise.length - 1) {
                        positionIndex--;
                    }
    
                    if (findSection) {
                        postQuery(getSectionQuery());
                    } else {
                        postQuery([organise[positionIndex], organise[positionIndex + 1], valueToPlace]);
                    }
                } else {
                    postAnswer(organise);
                    if (queries.length > mostExpensive.queries) {
                        mostExpensive.case = answersGiven.length;
                        mostExpensive.sequence = organise.join(' ');
                        mostExpensive.queries = queries.length;
                    }
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
