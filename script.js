/* 
the increment buttons update the number -> need to call guestNum and homeNum and eventlistener for the increments - plusOne, plusTwo, plusThree

foulUp and foulDown changes foulNumHome / foulNumGuest

reset - sets counter + textcontent to 0
*/
let homeScoreEl = document.getElementById("homeNum");
let homeFoulEl = document.getElementById("foulNumHome");
let guestScoreEl = document.getElementById("guestNum");
let guestFoulEl = document.getElementById("foulNumGuest");

let resetBtn = document.getElementById("reset");

let homePlusOneBtn = document.getElementById("plusOneH");
let homePlusTwoBtn = document.getElementById("plusTwoH");
let homePlusThreeBtn = document.getElementById("plusThreeH");

let guestPlusOneBtn = document.getElementById("plusOneG");
let guestPlusTwoBtn = document.getElementById("plusTwoG");
let guestPlusThreeBtn = document.getElementById("plusThreeG");

let guestFoulUpBtn = document.getElementById("foulUpG");
let guestFoulDownBtn = document.getElementById("foulDownG");
let homeFoulUpBtn = document.getElementById("foulUpH");
let homeFoulDownBtn = document.getElementById("foulDownH");

let homeCount = 0;
let homeFouls = 0;
let guestCount = 0;
let guestFouls = 0;

resetBtn.addEventListener("click", resetScore);
homePlusOneBtn.addEventListener("click", incrementNum);
homePlusTwoBtn.addEventListener("click", incrementNum);
homePlusThreeBtn.addEventListener("click", incrementNum);
guestPlusOneBtn.addEventListener("click", incrementNum);
guestPlusTwoBtn.addEventListener("click", incrementNum);
guestPlusThreeBtn.addEventListener("click", incrementNum);
guestFoulUpBtn.addEventListener("click", incrementNum);
guestFoulDownBtn.addEventListener("click", incrementNum);
homeFoulUpBtn.addEventListener("click", incrementNum);
homeFoulDownBtn.addEventListener("click", incrementNum);

function incrementNum(event) {
  switch (event.target.id) {
    case "plusOneH":
      homeCount += 1;
      homeScoreEl.textContent = homeCount;
      break;
    case "plusTwoH":
      homeCount += 2;
      homeScoreEl.textContent = homeCount;
      break;
    case "plusThreeH":
      homeCount += 3;
      homeScoreEl.textContent = homeCount;
      break;
    case "plusOneG":
      guestCount += 1;
      guestScoreEl.textContent = guestCount;
      break;
    case "plusTwoG":
      guestCount += 2;
      guestScoreEl.textContent = guestCount;
      break;
    case "plusThreeG":
      guestCount += 3;
      guestScoreEl.textContent = guestCount;
      break;
    case "foulUpG":
      guestFouls++;
      guestFoulEl.textContent = guestFouls;
      break;
    case "foulDownG":
      guestFouls--;
      if (guestFouls < 0) {
        break;
      } else {
        guestFoulEl.textContent = guestFouls;
        break;
      }
    case "foulUpH":
      homeFouls++;
      homeFoulEl.textContent = homeFouls;
      break;
    case "foulDownH":
      homeFouls--;
      if (homeFouls < 0) {
        break;
      } else {
        homeFoulEl.textContent = homeFouls;
        break;
      }
  }
}

function resetScore() {
  homeCount = 0;
  homeScoreEl.textContent = homeCount;
  homeFouls = 0;
  homeFoulEl.textContent = homeFouls;
  guestCount = 0;
  guestScoreEl.textContent = guestCount;
  guestFouls = 0;
  guestFoulEl.textContent = guestFouls;
}
