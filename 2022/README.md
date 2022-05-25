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

<!-- intro-end -->
## Qualification

<!-- stage-start: qualifying -->

### Punched Cards

<!-- problem-start: qualifying:punched-cards -->

```
cat ./qualifying/punched-cards/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/punched-cards node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/punched-cards.test.js
```

<!-- problem-end: qualifying:punched-cards -->

### 3D Printing

<!-- problem-start: qualifying:3d-printing -->

```
cat ./qualifying/3d-printing/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/3d-printing node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/3d-printing.test.js
```

<!-- problem-end: qualifying:3d-printing -->

### d1000000

<!-- problem-start: qualifying:d1000000 -->

```
cat ./qualifying/d1000000/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/d1000000 node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/d1000000.test.js
```

<!-- problem-end: qualifying:d1000000 -->

<!-- stage-end: qualifying -->

<!-- stage-end: round-1b -->
## Round 1A

<!-- stage-start: round-1c -->

### Double or One Thing

<!-- problem-start: round-1c:double-or-one-thing -->

```
cat ./round-1c/double-or-one-thing/sample.in | docker run -i -v $(pwd):/app -w /app/round-1c/double-or-one-thing node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test round-1c/double-or-one-thing.test.js
```

<!-- problem-end: round-1c:double-or-one-thing -->

<!-- stage-end: round-1c -->
