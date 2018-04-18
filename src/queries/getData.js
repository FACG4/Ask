const dbConnections = require("./../database/db_connection");

const getUserData = (user_id, cb) => {
  dbConnections.query(
    `select questions.id as questionid, questions.body as questionBody ,answers.body  as answerBody, questions.user_id as user_id from questions left join answers on questions.id=answers.question_id where questions.user_id=${user_id} ORDER BY questions.id DESC;`,
    (err, res) => {
      if (err) cb(err);
      else {
        cb(null, res.rows);
      }
    }
  );
};

const getData = cb => {
  
  dbConnections.query(
    "SELECT users.id , users.name , questions.body AS question, answers.body AS answer FROM users, questions , answers WHERE users.id = questions.user_id AND questions.id = answers.question_id  ORDER BY users.id ASC;",
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

module.exports = { getUserData, getData };
