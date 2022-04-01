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

## Stage Title

## Problem A Title

```
cat ./stage/problem-a/sample.in | docker run -i -v $(pwd):/app -w /app/stage/problem-a node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test stage/problem-a.test.js
```
