const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "",
  database: "paw",
});

module.exports = pool;
