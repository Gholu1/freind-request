var a = document.querySelector("#status");

var button = document.querySelector("#lodabutton");
var button2 = document.querySelector("#remove");
var check = 0;
button.addEventListener("click", function () {
  //   console.log(button);
  if (check == 0) {
    a.innerHTML = "friends";
    a.style.color = "green";
  }
  check = 1;
});
button2.addEventListener("click", function () {
  a.innerHTML = "stranger";
  a.style.color = "red";
  check = 0;
});
