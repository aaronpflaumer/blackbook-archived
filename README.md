# Blackbook

A tool for helping authors track their fictional characters.


##### Technologies used:
 * [AngularJS](https://angularjs.org/)
 * [Express](http://expressjs.com/)
 * [Node.js](https://nodejs.org/)
 * [PostgreSQL](http://www.postgresql.org/)

### Setup
---

#### Requirements

You will need to have `npm`, `bower`, `grunt`, and `PostgreSQL` installed before setting up the project.

#### Install Dependencies

>Clone the Blackbook repo to your machine and then run the following in the project root folder to install all node and bower dependencies.
```bash
npm install && bower install
```

#### Run Local Grunt Server

>Once dependencies are installed run the following to start up grunt serve.
```bash
grunt serve
```
This will host the page locally at [http://localhost:9000/](http://localhost:9000/).

#### Setup PostgreSQL

>Once you have PostgreSQL installed, create a `blackbook` database from your terminal.
```bash
createdb blackbook
```
Then create a `developer` user from your terminal. When prompted for a password enter `developmentPassword`.
```bash
createuser -P -S -D -R -e developer
```

### Using PostgreSQL

>This will access the PostgreSQL cli for the `blackbook` database as the `developer`.
```bash
psql -d blackbook -U developer
```

>This will run the scripts in the `database` folder. It must be run directly from the `database` folder.
```
psql -f [filename.sql]
```
 * `clear.sql` - Drop all tables.
 * `create.sql` - Create new tables with no data.
 * `reset.sql` - Drop all tables and create with no data.
 * `seed.sql` - Drop all tables, create new tables, and insert dummy data.

#### Testing With Grunt

>This will test to make sure the site is functioning properly.
```bash
grunt test
```
