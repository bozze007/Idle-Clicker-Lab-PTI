// Global variables
let money = 0;
let autoClickers = 0;
let clickValue = 1;

// Clicking the Tahu
var animationRunning = false;
function clickTahu() {
  money += clickValue;
  updateMoney();

  var tahu = document.getElementById("tahu");
  if (!animationRunning) {
    animateTahu(tahu);
  }
}

function animateTahu(tahu) {
  tahu.classList.add("animated", "bounce");
  animationRunning = true;
  window.requestAnimationFrame(function() {
    tahu.classList.remove("animated", "bounce");
    animationRunning = false;
  });
}

function updateMoney() {
  document.getElementById("money").innerText = money;
}

// Buying an upgrade
function buyUpgrade(upgradeNumber) {
  let upgradeCost = upgradeNumber * 10;
  if (money >= upgradeCost) {
    money -= upgradeCost;
    clickValue *= 2;
    updateMoney();
    let upgradeButton = document.getElementById("upgrades").getElementsByTagName("button")[upgradeNumber - 1];
    upgradeButton.innerText = "Upgraded!";
    upgradeButton.disabled = true;
  } else {
    alert("Duit lu ga cukup bro, cari duit dulu sono");
  }
}

function buyAutoClick() {
  let autoClickCost = 100;
  if (money >= autoClickCost) {
    money -= autoClickCost;
    autoClickers++;
    setInterval(autoClick, 1000);
    updateMoney();
    document.getElementById("auto-clickers").innerText = autoClickers;
  } else {
    alert("Duit lu ga cukup bro, cari duit dulu sono");
  }
}

function autoClick() {
  money += autoClickers * clickValue;
  updateMoney();
}
