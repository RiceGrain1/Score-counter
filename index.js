let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScore = 0
let guestScoreEl = document.getElementById("guest-score")
let home = "home"
let guest = "guest"

function addOne(team) {
   if (team === home) {
     homeScore += 1
    homeScoreEl.textContent = homeScore
    console.log("Home team has been given 1 point")
   }
  else if (team === guest) {
     guestScore += 1
    guestScoreEl.textContent = guestScore
    console.log("Guest team has been given 1 point")
   }
   else {
    console.log("Something broke")
   }
}

function addTwo(team) {
    if (team === home) {
     homeScore += 2
     homeScoreEl.textContent = homeScore
     console.log("Home team has been given 2 points")
    }
   else if (team === guest) {
      guestScore += 2
     guestScoreEl.textContent = guestScore
     console.log("Guest team has been given 2 point")
    }
    else {
     console.log("Something broke")
    }
 }