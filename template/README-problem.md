### Title

<!-- problem-start: id -->

```
cat ./stage/problem-a/sample.in | docker run -i -v $(pwd):/app -w /app/stage/problem-a node node index.js
```

to run the tests:

```
docker run -it -v $(pwd):/app -w /app/test node npm test stage/problem-a.test.js
```

<!-- problem-end: id -->
