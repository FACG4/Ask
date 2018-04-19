const dbConnections = require("./../database/db_connection");

const getUserData = (user_id, cb) => {
  let sql = {
    text: "SELECT questions.id AS questionId, questions.body AS questionBody ,answers.body  AS answerBody, questions.user_id as user_id FROM questions LEFT JOIN answers ON questions.id=answers.question_id WHERE questions.user_id = $1 ORDER BY questions.id DESC",
    values: [user_id]
  };
  dbConnections.query(
    sql,
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

module.exports = {
  getUserData,
  getData
};
