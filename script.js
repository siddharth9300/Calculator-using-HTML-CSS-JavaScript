let string = "";

let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      if (string === undefined) {
        string = "Invalid";
      }
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "⬅️") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "X") {
      string = string + "*";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "÷") {
      string = string + "/";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

function dark() {

   
        var element = document.body;
        element.classList.toggle("dark-mode");



  switch (document.getElementById("dark").innerText) {
    case "Dark Mode":
      document.getElementById("dark").innerText = "Light Mode";
      document.getElementById("dark").style.background = "white";
      document.getElementById("dark").style.color = "black";

      break;
    case "Light Mode":
      document.getElementById("dark").innerText = "Dark Mode";
      document.getElementById("dark").style.background = "Black";
      document.getElementById("dark").style.color = "White";
      break;

    default:
      break;
  }
}
