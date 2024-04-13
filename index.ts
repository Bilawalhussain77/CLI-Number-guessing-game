#! usr/bin/env node
import inquirer from "inquirer";

console.log("wellcome to CodeWithBilawal - CLI Number Guessing Game");

const randomnumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt({
    name: "userguessednumber",
    type: "number",
    message: "Guess a number between 1 to 10 ",
});

if (answer.userguessednumber == randomnumber) {
    console.log("you guessed it right");
} else {
    console.log("you guessed it wrong"); 
}



