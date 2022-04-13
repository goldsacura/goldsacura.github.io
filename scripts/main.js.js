var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kokomi.png') {
      myImage.setAttribute ('src','images/kokomi2.png');
    } else {
      myImage.setAttribute ('src','images/kokomi.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Пожалуйста, введите ваше имя. ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добрый день, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Добрый день, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }