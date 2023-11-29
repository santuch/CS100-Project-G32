const body = document.querySelector('body');
const toggle = document.getElementById("toggle");
const topic = document.querySelector(".Member-topic");
const infor = document.querySelector(".introduction");
const Bar = document.querySelector(".bar");
toggle.onclick = function changeTheme(){
  toggle.classList.toggle('active');//element.classList.add/remove/toggle
  body.classList.toggle('active');
  topic.classList.toggle('active');
  infor.classList.toggle('active');
  Bar.classList.toggle('active');
}