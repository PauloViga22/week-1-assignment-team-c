const voteUp = document.getElementById('voteUp');

console.log("voteup: ", voteUp);

console.log("Parent", voteUp.parentElement)
Console.log(voteUp.parentElement)

let pressed = 0

voteUp.addEventListener("click", (ele) => {
  console.log("clicked")
  voteUp.innerHTML = pressed++;

})

console.log("data", data);