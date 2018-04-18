const myData = localStorage.getItem('objectToPass');
var firstData = JSON.parse(myData);

const header = document.getElementById('userName');
header.textContent = firstData[0].name;
