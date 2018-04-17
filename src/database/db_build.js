const dbConnection = require("./db_connection");
const fs = require("fs");

const sql = fs.readFileSync(`${__dirname}/bd_build.sql`).toString();

const dbBuild = cp => {
  dbConnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
      console.log("errrrrrrrrr");
    } else {
      console.log("superheroes database has been initialzed with: ", res);
      cb(null, res);
    }
  });
};
