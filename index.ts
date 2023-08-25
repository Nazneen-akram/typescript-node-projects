import inquirer from "inquirer";
//import Choices from "inquirer/lib/objects/choices.js";

const answer = await inquirer.prompt([
    {
        type: 'number',
        name:'num1',
        message: 'Enter the first number:'
    },
    {
        type: 'number',
        name:'num2',
        message: 'Enter the second number:'
    },
    {
        type: 'list',
        name:'operator',
        message: 'Select the operator you want to perform:',
        choices: ['Add','Subtract','Multiply','Divide']
    }   
]);

let result:number;

switch(answer.operator){
    case 'Add':
        result = answer.num1 + answer.num2;
        console.log("The answer for Addition is:",result);
        break;
    case 'Subtract':
        result = answer.num1 - answer.num2;
        console.log("The answer for Subtraction is:",result);
        break;
    case 'Multiply':
        result = answer.num1 * answer.num2;
        console.log("The answer for Multiplication is:",result);
        break;
    case 'Divide':
        result = answer.num1 / answer.num2;
        console.log("The answer for Division is:",result);
        break;
}
