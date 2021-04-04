# Nodejs, Express.js, Sequelize, and PostgreSQL RESTful API

To run locally:

- Make sure you have install and run PostgreSQL server.
- Create database in your server and replace the config file variables
- Run `npm install`
- Run `sequelize db:migrate` Note: make sure you have sequelize cli installed globally `npm install -g sequelize-cli`
- Run `npm start`

### April 1, 2021

- Created app.js and created the server code
- Created .gitignore fil
- created .sequelizerc file to create model, seeder and migration files and run `sequelize init`
- changes the development database credentials
- rename the config.json file to config.js and change the name where it's used in the model index file
- rewrite the config.js file

### April 3, 2021

- created the model folder
- define all the models and their corresponding associations using the class based approach by extending the Model base class destructed from sequelize
-
