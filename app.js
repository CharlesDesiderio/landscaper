let player = {
  name: "Generic Player",
  money: 0,
  currentTool: 0,
  currentIncome: 100000
}

let tools = [{
  name: "teeth",
  price: 0,
  income: 1
}, {
  name:"rusty scissors" ,
  price: 5,
  income: 5
}, {
  name: "old-timey push lawnmower",
  price: 25,
  income: 50
}, {
  name: "battery-powered lawnmower",
  price: 250,
  income: 100
}, {
  name: "team of starving students",
  price: 500,
  income: 250
}]

let getChoice = () => {
  let choice;
  if (player.currentTool === tools.length - 1) {
    choice = prompt(`You have ${tools[player.currentTool].name}. You will earn $${player.currentIncome} for a day of cutting grass. You currently have $${player.money}. You're fully upgraded! "cut" / "stop"`)
  } else {
    choice = prompt(`You have ${tools[player.currentTool].name}. You will earn $${player.currentIncome} for a day of cutting grass. You currently have $${player.money}. Your next upgrade is ${tools[player.currentTool + 1].name} for $${tools[player.currentTool + 1].price} . "cut" / "upgrade" / "stop" `)
  }

  processChoice(choice)
}

let processChoice = (choice) => {
  if (choice === "cut") {
    player.money += player.currentIncome
    alert(`You spend the day cutting lawns with your ${tools[player.currentTool].name}. You earned $${player.currentIncome}. You now have $${player.money}`)
  } else if (choice === "upgrade") {
    if (player.currentTool === tools.length - 1) {
      alert(`You're fully upgraded!`)
    }
    else if (player.currentTool !== tools.length && player.money >= tools[player.currentTool + 1].price) {
      player.money -= tools[player.currentTool + 1].price;
      player.currentIncome = tools[player.currentTool + 1].income;
      player.currentTool++;
    } else {
      alert(`You can't afford that! ...yet.`)
    }
  } else if (choice === "stop") {
    return
  }
  getChoice()
}

getChoice();
