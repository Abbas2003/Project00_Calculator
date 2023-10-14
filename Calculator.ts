#!/usr/bin/env node
// It's called a Shebang, 

// Calculator 

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { ADDRCONFIG } from "dns";


const sleep = () => {
    return new Promise((res)=>{
        setTimeout(res, 3000);
    })
};


async function welcome() {
    let wel = chalkAnimation.glitch("Let's Start Calculation");
    await sleep();
    wel.stop();
    console.log(chalk.rgb(158, 3, 16)(`
     _____________________
    |  _________________  |
    | | ABBAS        0. | |
    | |_CALC____________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    
    `));

    console.log(chalk.rgb(9, 129, 153)(`

    █████╗ ██████╗ ██████╗  █████╗ ███████╗
    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝
    ███████║██████╔╝██████╔╝███████║███████╗
    ██╔══██║██╔══██╗██╔══██╗██╔══██║╚════██║
    ██║  ██║██████╔╝██████╔╝██║  ██║███████║
    ╚═╝  ╚═╝╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝                                                                                                                                         
    `));

    console.log(chalk.rgb(9, 129, 153)(`
    ┌─┐┌─┐┬  ┌─┐┬ ┬┬  ┌─┐┌┬┐┌─┐┬─┐
    │  ├─┤│  │  │ ││  ├─┤ │ │ │├┬┘
    └─┘┴ ┴┴─┘└─┘└─┘┴─┘┴ ┴ ┴ └─┘┴└─                                                                                                                                         
    `));
    
    
}

await welcome();



async function askQuestion() {
    const answers = await inquirer.prompt([
        
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices: ["Addition","Subtraction","Multiplication","Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter First Number: ",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Second Number: ",
        },

    ]);
    
    if(answers.operator == "Addition"){
        console.log(chalk.green.visible(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}\n`));
    }
    else if(answers.operator == "Subtraction"){
        console.log(chalk.cyanBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}\n`));
    }
    else if(answers.operator == "Multiplication"){
        console.log(chalk.grey(`${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}\n`));
    }
    else if(answers.operator == "Division"){
        console.log(chalk.gray.visible(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}\n`));
    };


};

// askQuestion();


async function startAgain() {
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? \n Press Y or N: "
        })
    }while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES' )
}

startAgain()