// export const Sequelize = require('sequelize');
// const mysql2 = require('mysql2');

// export let sqlConnection = new Sequelize(process.env.MYSQLDATABASENAME, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
//   host: process.env.MYSQLHOSTNAME,
//   dialect: 'mysql',
//   pool: {
//     max: 10,
//     min: 1,
//     idle: 6000,
//     handleDisconnects: true
//   },
//   dialectOptions: process.env.USEMYSQLSOCKETCONNECTION?{ // Localhost only
//     socketPath: process.env.MYSQLSOCKETPATH, 
//   }:{},
//   dialectModulePath: 'mysql2',
//   define: {
//     freezeTableName: true
//   }
// });
