# Creating API Rest with Node js + express + Sqlite
## Yuri Marcon

Repo with code developed in the course [Creating API Rest with Node js + express + Sqlite](https://www.youtube.com/playlist?list=PLygIEirBzJi4lTC-5nzfhEyxuKq2y1uiR).


### Dependency modules
* express

* nodemon
    * npm install -g nodemon
    * npm install --save nodemon
    * npm install -S nodemon

* sqlite
* sqlite3

#### If the port is blocked, you should look for and kill the process that is running in the background.

1. Find the process ID (PID) using port 3000:
```bash
sudo lsof -i :3000
```

This command will list the processes using port 3000. Look for the PID in the output.


2. Kill the process using the PID:

```bash
sudo kill -9 <PID>
```