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

### April, 5, 2021

- Created the controller folder.
- Created the controller files to interact with each data model.
- Classrom and Course CRUD created

### April, 7, 2021

- created the controller files
- wrote the CRUD Operations of each object.

### April, 9, 2021

- created the route folder files
- created the docker file and the docker-compose file
- created the bin folder and the www root server connection
