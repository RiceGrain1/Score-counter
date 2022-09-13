let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScore = 0
let guestScoreEl = document.getElementById("guest-score")
let home = "home"
let guest = "guest"

//Functions for adding points with an onclick event
function addOne(team) {
   if (team === home) {
      homeScore += 1
      homeScoreEl.textContent = homeScore
      console.log("Home team has been given 1 point")
   } else if (team === guest) {
      guestScore += 1
      guestScoreEl.textContent = guestScore
      console.log("Guest team has been given 1 point")
   } else {
      console.log("Something broke")
   }
}

function addTwo(team) {
   if (team === home) {
      homeScore += 2
      homeScoreEl.textContent = homeScore
      console.log("Home team has been given 2 points")
   } else if (team === guest) {
      guestScore += 2
      guestScoreEl.textContent = guestScore
      console.log("Guest team has been given 2 point")
   } else {
      console.log("Something broke")
   }
}

function addThree(team) {
   if (team === home) {
      homeScore += 3
      homeScoreEl.textContent = homeScore
      console.log("Home team has been given 3 points")
   } else if (team === guest) {
      guestScore += 3
      guestScoreEl.textContent = guestScore
      console.log("Guest team has been given 3 point")
   } else {
      console.log("Something broke")
   }
}

//Function for reseting the counter
let resetBtn = document.getElementById("reset-button")

function resetCounter(team) {
   if (team === home) {
      homeScore = 0
      homeScoreEl.textContent = homeScore
      alert("Home score has been reset to 0!")
      console.log("Home Score has been reset to 0")
   } else if (team === guest) {
      guestScore = 0
      guestScoreEl.textContent = guestScore
      alert("Guest score has been reset to 0!")
      console.log("Guest Score has been reset to 0")
   } else {
      console.log("Something broke")
   }
}


//Highlight current winning team
//Implement alternative to onclick="" in the html
//Use an event listener to do this
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//https://developer.mozilla.org/en-US/docs/Web/Events
function highlightWinner() {
   if (homeScore > guestScore) {
   homeScoreEl.classList.add("glowing-border") 
   guestScoreEl.classList.remove("glowing-border")
}
else if (homeScore < guestScore) {
      guestScoreEl.classList.add("glowing-border")
      homeScoreEl.classList.remove("glowing-border")
   }
}

