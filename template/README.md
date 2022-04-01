## Prerequisites

- [Docker Desktop]([http://](https://docs.docker.com/get-docker/))

## Testing

### Setup

```
docker run -v $(pwd):/app -w /app/test node npm install
```

### Run all tests

```
docker run -it -v $(pwd):/app -w /app/test node npm test
```

## Qualification

## Problem A Title

```
cat ./qualifying/problem-a/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/problem-a node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/problem-a.test.js
```
