var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozila.png') {
        myImage.setAttribute('src', 'images/firefox_flat.png');
    } else {
        myImage.setAttribute('src', 'images/mozila.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please Enter Your Name ?');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is Cool ' + myName;
    if(!localStorage.getItem('name')){
        setUserName();
    } else {
        var storedName = localStorage.getItem('name');
        myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
    }
}

myButton.onclick = function () { 
    setUserName();
 }

