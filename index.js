let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScore = 0
let guestScoreEl = document.getElementById("guest-score")
let home = "home"
let guest = "guest"
function addOne(team) {
   if (team === home) {
    let homeValue = homeScore++
    homeScoreEl.textContent = homeValue
    console.log("Home team has been given a point")
   }
  else if (team === guest) {
    let guestValue = guestScore++
    guestScoreEl.textContent = guestValue
    console.log("Guest team has been given a point")
   }
   else {
    console.log("Something broke")
   }
}