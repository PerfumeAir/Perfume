let myHeading = document.querySelector("h2");

function setUserName() {
  let myName = prompt("请输入密码：");
  if (myName!='8888') {
    setUserName();
  } else {
    myHeading.textContent = "Hello," + myName;
  }
}
