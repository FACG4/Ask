const dbConnections = require("../database/db_connection");

const askQuestion = (question, cb) => {
  console.log(question);
  dbConnections.query(
    {
      text: "insert into questions (body, user_id) values($1, $2)",
      values: [question.question, question.user_id]
    },
    (err, res) => {
      if (err) throw new Error(err);
      else cb(null, res);
    }
  );
};

const reply = (reply, cb) => {
  console.log(reply);
  dbConnections.query(
    {
      text: "insert into answers (body, question_id) values($1, $2)",
      values: [reply.reply, reply.questionid]
    },
    (err, res) => {
      if (err) throw new Error(err);
      else cb(null, res);
    }
  );
};

module.exports = { askQuestion, reply };
