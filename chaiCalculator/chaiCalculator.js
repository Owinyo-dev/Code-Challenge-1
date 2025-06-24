function calculateChaiIngredients(){
    let numberofCups=prompt("Welcome to the Chai cup calculator app. How many cups of Chai do you want?");
    let numofCups=Number(numberofCups);
     if (isNaN(numofCups) || numofCups <= 0) {
        console.log("Please enter a valid number of cups.");
        return;
    }
    const water=200*numofCups;
    const milk=50*numofCups;
    const teaLeaves=1*numofCups;
    const sugar=2*numofCups;
    console.log(`To make ${numofCups} cups of Chai, you will need:\n.Water:${water}ml\n.Milk:${milk}ml\n.Tea Leaves:${teaLeaves} tablespoons\n.Sugar(sukari):${sugar}teaspoons\n. Enjoy your Chai.`);
}
calculateChaiIngredients()
