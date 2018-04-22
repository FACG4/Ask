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
      const userInfo = document.getElementById("userInfo");
      const addquestex = document.getElementById("ask");
      addquestex.setAttribute("class", "textarea");
      const addquesbtn = document.getElementById("btnId");
      addquesbtn.setAttribute("class", "addQuestion");
      const question = document.createElement("div");
      question.setAttribute("class", "row");
      const questionUser = document.createElement("label");
      questionUser.setAttribute("class", "quesLab");
      const answerUser = document.createElement("label");
      answerUser.setAttribute("class", "ansLab");
      answerUser.textContent = element.answerbody;
      questionUser.textContent = element.questionbody;
      const result = document.querySelector("#result");
      result.appendChild(question);
      question.appendChild(questionUser);
      question.appendChild(answerUser);
      const reply = document.createElement("button");
      reply.setAttribute("class", "addQuestion2");
      reply.textContent = "reply";
      question.setAttribute("id", element.questionid);
      reply.addEventListener("click", () => {
        const rForm = document.createElement("form");
        rForm.setAttribute("action", "/reply");
        rForm.setAttribute("class", "form");
        rForm.setAttribute("method", "post");
        rForm.setAttribute("class", "reply");
        const replyArea = document.createElement("textarea");
        replyArea.setAttribute("name", "reply");
        replyArea.setAttribute("placeholder", "add answer");
        replyArea.setAttribute("class", "textarea");
        replyArea.setAttribute("required", "");
        const replyButton = document.createElement("button");
        replyButton.setAttribute("class", "addQuestion2");
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
