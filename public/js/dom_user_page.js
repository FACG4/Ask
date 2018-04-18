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
  }

  const getUserInfo = (err, data) => {
    if (err) {
        throw new Error(err);
      } else {
        const selectSql = JSON.parse(data);
        selectSql.forEach(element => {
            const userInfo=document.getElementById('userInfo');
            const question= document.createElement('div');
            question.setAttribute('class','row');
            const questionUser= document.createElement('label');
            questionUser.setAttribute('class','quesLab');
            const answerUser= document.createElement('label');
            answerUser.setAttribute('class','ansLab');

            answerUser.textContent=element.answerbody;
            questionUser.textContent=element.questionbody;
            
            const result=document.querySelector('#result');
            result.appendChild(question);
            question.appendChild(questionUser);
            question.appendChild(answerUser);
        });
      }
  }

let id =window.location.href.split('/')[4];

fetch('/selectUser/'+id,getUserInfo)   ;
