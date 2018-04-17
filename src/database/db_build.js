const dbConnection = require("./db_connection");
const fs = require("fs");

const sql = fs.readFileSync(`${__dirname}/bd_build.sql`).toString();
// console.log(sql);
const dbBuild = () => {
  dbConnection.query(sql, (err, res) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log("the process success");
    }
  });
};

dbBuild();
