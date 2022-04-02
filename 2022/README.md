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

## Punched Cards

<!-- problem-start: qualifying:punched-cards -->

```
cat ./qualifying/punched-cards/sample.in | docker run -i -v $(pwd):/app -w /app/qualifying/punched-cards node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test qualifying/punched-cards.test.js
```

<!-- problem-end: qualifying:punched-cards -->

<!-- stage-end: qualifying -->
