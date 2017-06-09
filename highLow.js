var compNum = Math.floor(Math.random()* 100) +1
console.log(compNum)
var attemps = 0
var remainingAttemps = 7
var userName = prompt("Please Enter Your Name")
function hiLo() {
  attemps++
  console.log(attemps)
  let value = document.getElementById('num-input').value
  if(attemps === 7) {
    document.getElementById("display").innerHTML = "You Ran Out Of Tries"
    document.getElementById('num-input').value = ""
  } else if(isNaN(value)) {
    document.getElementById("display").innerHTML = "Please Enter A Valid Number"
    document.getElementById('num-input').value = ""
  } else if (value < compNum) {
    document.getElementById("display").innerHTML = "Your Number is: Too Low"
    document.getElementById('num-input').value = ""
  } else if (value> compNum){
    document.getElementById("display").innerHTML = "Your Number is: Too High"
    document.getElementById('num-input').value = ""
  } else if(value == compNum) {
    document.getElementById("display").innerHTML = "You Guessed Correctly " + userName
    document.getElementById('num-input').value = ""
  }
}
