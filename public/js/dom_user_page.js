const fetch = (url, callback) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(null, xhr.responseText);
    } else {
      callback("error" + xhr.responseType);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};
const getUserInfo = (err, data) => {
  if (err) {
    throw new Error(err);
  } else {
    const selectSql = JSON.parse(data);
    selectSql.forEach(element => {
      console.log(element);
      const userInfo = document.getElementById("userInfo");
      const question = document.createElement("div");
      question.setAttribute("class", "question");
      const questionUser = document.createElement("h2");
      const answerUser = document.createElement("h3");
      answerUser.textContent = element.answerbody;
      questionUser.textContent = element.questionbody;
      const result = document.querySelector("#result");
      result.appendChild(question);
      question.appendChild(questionUser);
      question.appendChild(answerUser);
      const reply = document.createElement("button");
      reply.textContent = "reply";
      question.setAttribute("id", element.questionid);
      reply.addEventListener("click", () => {
        const rForm = document.createElement("form");
        rForm.setAttribute("action", "/reply");
        rForm.setAttribute("method", "post");
        rForm.setAttribute("class", "reply");
        const replyArea = document.createElement("textarea");
        replyArea.setAttribute("name", "reply");
        replyArea.setAttribute("placeholder", "add answer");
        replyArea.setAttribute("class", "replyArea");
        const replyButton = document.createElement("button");
        replyButton.setAttribute("type", "submit");
        replyButton.textContent = "reply";
        question.appendChild(reply);
        const rq = document.getElementById(element.questionid);

        const replyHidden = document.createElement("input");
        replyHidden.setAttribute("type", "hidden");
        replyHidden.setAttribute("name", "questionid");
        replyHidden.setAttribute("value", element.questionid);
        rForm.appendChild(replyHidden);

        rq.appendChild(rForm);
        rForm.appendChild(replyArea);
        rForm.appendChild(replyButton);
      });
      question.appendChild(reply);
    });

    const form = document.querySelector("#form");
    const hidden = document.createElement("input");
    hidden.setAttribute("type", "hidden");
    hidden.setAttribute("name", "user_id");
    hidden.setAttribute("value", window.location.href.split("/")[4]);
    form.appendChild(hidden);
  }
};
let id = window.location.href.split("/")[4];

fetch("/selectUser/" + id, getUserInfo);
