// import fs from 'fs';
// import path from 'path';
// import Sequelize from 'sequelize';

// const basename = path.basename(module.filename);
// // const env = process.env.NODE_ENV || 'development';
// const db = {};

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000,
//   },
// });

// // Load all the models
// fs
//   .readdirSync(__dirname)
//   .filter((file) => {
//     // Validate files
//     const isNotDotFile = file.indexOf('.') !== 0;
//     const isNotBasename = file !== basename;
//     const isJSFile = file.slice(-3) === '.js';
//     return isNotDotFile && isNotBasename && isJSFile;
//   })
//   .forEach((file) => {
//     const model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// export default { sequelize, Sequelize };
