// Global variables
let money = 0;
let autoClickers = 0;

// Clicking the Tahu
function clickTahu() {
	money++;
	document.getElementById('money').innerHTML = money;
}

// Buying an upgrade
function buyUpgrade(upgradeNumber) {
    const upgradeCost = (upgradeNumber + 1) * 10;
    if (money >= upgradeCost) {
      money -= upgradeCost;
      document.getElementById('money').innerHTML = money;
      const autoClickValue = upgradeNumber + 1;
      const autoClickButton = document.createElement('button');
      autoClickButton.innerHTML = `Upgrade ${upgradeNumber + 1} (Cost: ${upgradeCost})`;
      autoClickButton.onclick = function() {
        buyUpgrade(upgradeNumber + 1);
      };
      document.getElementById(`upgrade-${upgradeNumber}`).replaceWith(autoClickButton);
  
      // add upgrade effect
      const upgradeEffect = () => {
        money += autoClickValue;
        document.getElementById('money').innerHTML = money;
      };
      setInterval(upgradeEffect, 1000);
    }
  }
  

// Buying an auto-clicker
function buyAutoClick() {
	if (money >= 100) {
		money -= 100;
		autoClickers++;
		document.getElementById('money').innerHTML = money;
		document.getElementById('auto-clickers').innerHTML = autoClickers;
	}
}

// Auto-clickers click the Tahu automatically
function autoClick() {
	money += autoClickers;
	document.getElementById('money').innerHTML = money;
}

// Call autoClick function every second
setInterval(autoClick, 1000);