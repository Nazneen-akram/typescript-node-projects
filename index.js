import inquirer from 'inquirer';
import { faker } from "@faker-js/faker";
const createUser = () => {
    let users = [];
    for (let i = 0; i < 5; i++) {
        let user = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(100000000 * Math.random() * 900000000),
            balance: 100000 * i,
        };
        users.push(user);
    }
    return users;
};
//Create Atm Machine
const atmMachine = async (users) => {
    const res = await inquirer.prompt({
        type: "number",
        message: "write pin code",
        name: "pin"
    });
    const user = users.find(val => val.pin == res.pin);
    if (user) {
        console.log(`Welcome ${user.name}`);
        atmFunc(user);
        return;
    }
    console.log("Invalid User pin");
};
// ATM Function
const atmFunc = async (user) => {
    const ans = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Which Activity do you want to perform?",
        choices: ["Withdraw", "Balance Check", "Deposit", "Exit"]
    });
    if (ans.select == 'Withdraw') {
        const amount = await inquirer.prompt({
            type: "number",
            message: "Enter Amount: ",
            name: "ruppee"
        });
        if (amount.ruppee > user.balance) {
            return console.log("Insufficient Balance");
        }
        else {
            if (amount.ruppee > 25000) {
                console.log("You cannot withdraw more than PKR 25,000 at one time");
            }
            else {
                console.log(`Withdrawn Amount: ${amount.ruppee}`);
                let remBalance = user.balance - amount.ruppee;
                console.log(`Remaining Balance: ${remBalance}`);
            }
        }
    }
    if (ans.select == 'Balance Check') {
        console.log(`You current balance is: ${user.balance}`);
    }
    if (ans.select == 'Deposit') {
        const amount = await inquirer.prompt({
            type: "number",
            message: "Enter Amount: ",
            name: "ruppee"
        });
        console.log(`Deposited Amount: ${amount.ruppee}`);
        let remBalance = user.balance + amount.ruppee;
        console.log(`Remaining Balance: ${remBalance}`);
    }
    if (ans.select == 'Exit') {
        console.log('Thank you for using the ATM');
    }
};
const users = createUser();
atmMachine(users);
//console.log(users)
