let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mysrc = myImage.getAttribute('src');
    if (mysrc == 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/beautiful-women.jpg');;
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt("请输入你的名字");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla Cool, ' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla Cool, ' + storeName;
}

myButton.onclick = function () {
    setUserName();
}