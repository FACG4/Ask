const tape = require("tape");
const data = require("../src/queries/getData");



tape("getData test", t => {
  let expected = [{
    id: 1,
    name: 'Sallam',
    question: 'How old are you?',
    answer: '12'
  }, {
    id: 2,
    name: 'Balsam',
    question: 'Do you like dogs?',
    answer: 'Yes I do'
  }, {
    id: 3,
    name: 'Abdullah',
    question: 'Do you like programming?',
    answer: 'No'
  }, {
    id: 4,
    name: 'Ahmed',
    question: 'What is your favorite color?',
    answer: 'Red'
  }];

  data.getData((err, result) => {
    if (err) console.log(err);
    t.deepEqual(result, expected, "Returns expected data");
  });
  t.end();
});

tape("getUserData test", t => {
  let expected = [{
    questionid: 3,
    questionbody: 'Do you like programming?',
    answerbody: 'No',
    user_id: 3
  }];

  data.getUserData(3, (err, result) => {
    if (err) console.log(err);
    t.deepEqual(result, expected, "Returns expected user data");
  });
  t.end();
});
