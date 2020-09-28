let player = {
  name: "Generic Player",
  money: 0,
  currentTool: 0,
  currentIncome: 1
}

let tools = [{
  name: "TEETH",
  price: 0,
  income: 1,
  image: "teeth.png"
}, {
  name: "RUSTY SCISSORS" ,
  price: 5,
  income: 5,
  image: "scissors.png"
}, {
  name: "OLD-TIMEY PUSH LAWNMOWER",
  price: 25,
  income: 50,
  image: "pushmower.png"
}, {
  name: "BATTERY-POWERED LAWNMOWER",
  price: 250,
  income: 100,
  image: "lawnmower.png"
}, {
  name: "TEAM OF STARVING STUDENTS",
  price: 500,
  income: 250,
  image: "students.png"
}]

document.getElementById('money').innerHTML = `$${player.money}`
document.getElementById('income').innerHTML = `$${player.currentIncome}`
document.getElementById('weapon').innerHTML = tools[player.currentTool].name
document.getElementById('player').innerHTML = `<img class="weaponImg" src="${tools[player.currentTool].image}" />`

let processChoice = (choice) => {
  if (choice === "cut") {
    player.money += player.currentIncome
    document.getElementById("message").innerHTML = `You attack <em>GRASS</em> with <em>${tools[player.currentTool].name} and earn $${player.currentIncome}!`
    document.getElementById("money").innerHTML = `$${player.money}`
    document.getElementById("player").style.left = "48%";
    setTimeout(() => {
      document.getElementById("player").style.left = "15%";
    }, 200)
    document.getElementById("enemy").style.right = "23%";
    document.getElementById("enemy").style.top = "41%";

    setTimeout(() => {
      document.getElementById("enemy").style.right = "25%";
      document.getElementById("enemy").style.top = "43%";
    }, 50)


  } else if (choice === "upgrade") {
    if (player.currentTool === tools.length - 1) {
      document.getElementById("message").innerHTML = "Fully upgraded!"
    }
    else if (player.currentTool !== tools.length && player.money >= tools[player.currentTool + 1].price) {
      player.money -= tools[player.currentTool + 1].price;
      player.currentIncome = tools[player.currentTool + 1].income;
      player.currentTool++;
      document.getElementById("message").innerHTML = `Get equipped with ${tools[player.currentTool].name}!`
      document.getElementById("income").innerHTML = `$${player.currentIncome}`
      document.getElementById("weapon").innerHTML =  tools[player.currentTool].name
      document.getElementById('player').innerHTML = `<img class="weaponImg" src="${tools[player.currentTool].image}" />`

    } else {
      document.getElementById("message").innerHTML = `You can't afford that! ...yet! You need $${tools[player.currentTool + 1].price}!`
    }
  }

}

document.getElementById("attack").addEventListener('click', () => processChoice("cut"))
document.getElementById("upgrade").addEventListener('click', () => processChoice("upgrade"))