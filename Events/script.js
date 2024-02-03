// 1)
// let btn = document.querySelector("#btn-1");

// btn.onclick = () => {
//     console.log("button was clicked");
//     let a = 24;
//     a++;
//     console.log(a);
// }

// btn.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }
// 2)
// let box = document.querySelector(".box");
// box.onmouseover = () => {
//     console.log("button was clicked on mouse");

// }

// Event Listeneres
// btn.addEventListener("click", (evt) => {
//   console.log("button 1 was clicked");
//   console.log(evt);
//   console.log(evt.type);
// });

// btn.addEventListener("click", () => {
//   console.log("button 2 was clicked");
// });

// practice que = Create a toggle button that changes the screen to dark-mode when clicked &
// light mode when clicked again?
let changeMode = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light"; // dark

changeMode.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    // document.querySelector("body").style.backgroundColor = "black";
  } else {
    currentMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    // document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currentMode);
});
