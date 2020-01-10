const voteUp = document.getElementById('voteUp');

console.log("voteup: ", voteUp);

let pressed = 0

voteUp.addEventListener("click", (ele) => {
  console.log("clicked")
  voteUp.innerHTML = pressed++;

  console.log(voteUp.parentElement);
})

console.log("data", data);