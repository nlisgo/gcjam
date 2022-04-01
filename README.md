# gcjam

Ensure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed, open the terminal and navigate to the folder you wish to setup this repository.

```
git clone git@github.com:nlisgo/gcjam.git
cd ./gcjam
```

## Create starting code for new problem

```
docker run -v $(pwd):/app bash /app/bin/create --help
```

> Usage: create [-h] [-v] folder_name stage stage_title problem problem_title

### Example

```
docker run -v $(pwd):/app bash /app/bin/create 2022 qualifying "Qualification" problem-name "Problem Title"
```

If this is the first time setting up for the 2022 folder then the folder should have been create with boiler plate code.

See the README in the 2022 folder.
