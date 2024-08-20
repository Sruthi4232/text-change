let button = document.getElementById("myButton");
let text = document.getElementById("myText");
let container = document.querySelector(".container");
let clicked = false;

button.addEventListener("click", function() {
  if (!clicked) {
    button.textContent = "Clicked!";
    text.textContent = "I tried cooking for the first time, and the smoke alarm gave me a standing ovation. The spaghetti fought back, the sauce staged a coup, and the kitchen looked like a crime scene. But hey, I’ve mastered the art of ordering takeout like a pro!";
    container.classList.add("changed");
    clicked = true;
  } else {
    button.textContent = "Click me!";
    text.textContent = "Hello Alll..... This is Sruthi"
    container.classList.remove("changed");
    clicked = false;
  }
});