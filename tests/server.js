const tape = require("tape");
const data = require("../src/queries/getData");



tape("getData test", t => {
  let expected = [{
      id: 4,
      name: 'Ahmed',
      question: 'What is your favorite color?',
      answer: 'Red'
    },
    {
      id: 1,
      name: 'Sallam',
      question: 'How old are you?',
      answer: '12'
    },
    {
      id: 3,
      name: 'Abdullah',
      question: 'Do you like programming?',
      answer: 'No'
    },
    {
      id: 3,
      name: 'Abdullah',
      question: 'Do you like programming?',
      answer: 'No'
    },
    {
      id: 3,
      name: 'Abdullah',
      question: 'Do you like programming?',
      answer: 'No'
    },
    {
      id: 3,
      name: 'Abdullah',
      question: 'Do you like programming?',
      answer: 'No'
    },
    {
      id: 3,
      name: 'Abdullah',
      question: 'Do you like programming?',
      answer: null
    },
    {
      id: 2,
      name: 'Balsam',
      question: 'Do you like dogs?',
      answer: 'Yes I do :)'
    }
  ];

  data.getData((err, result) => {
    if (err) console.log(err);
    t.deepEqual(result, expected, "Returns expected data");
  });
  t.end();
});

tape("getUserData test", t => {
  let expected = [{
      questionbody: 'Do you like programming?',
      answerbody: 'No'
    },
    {
      questionbody: 'Do you like programming?',
      answerbody: 'No'
    },
    {
      questionbody: 'Do you like programming?',
      answerbody: 'No'
    },
    {
      questionbody: 'Do you like programming?',
      answerbody: 'No'
    },
    {
      questionbody: 'Do you like programming?',
      answerbody: null
    }
  ];

  data.getUserData((err, result) => {
    if (err) console.log(err);
    t.deepEqual(result, expected, "Returns expected user data");
  }, 3);
  t.end();
});
