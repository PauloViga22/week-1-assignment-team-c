const voteUp = document.getElementById('voteUp');
const voteDown = document.getElementById('voteDown');

console.log("voteup: ", voteUp);

let pressed = 0

voteUp.addEventListener("click", (ele) => {
  console.log("clicked")
  voteUp.innerHTML = pressed++;
  voteUp.parentElement.innerText = "👍 😊"
  console.log(voteUp.parentElement);
})

voteDown.addEventListener("click", (ele) => {
  console.log("clicked")
  voteDown.innerHTML = pressed++;
  voteDown.parentElement.innerText = "👎 💭😔"
  console.log(voteDown.parentElement);
})