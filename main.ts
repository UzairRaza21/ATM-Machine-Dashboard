let userName: string = "uzairraza";
let password : number = 1234;



import inquirer from "inquirer";
import { ATM } from "./ATMDashboard.js";

let accountHolder = await inquirer.prompt([
    {
        message: "Enter your User-name",
        type: "input",
        name: "accountTitle",
    },
    {
        message: "Enter your Password",
        type: "number",
        name: "PIN"
    },
    {
        message: " Select Option",
        type: "list",
        choices: ["Cash Deposit", "Cash Withdrawal", "Balance Inquiry", "Exit"],
        name: "ATMOption"
    }
]);

if (accountHolder.accountTitle = userName && accountHolder.PIN == password){
    let availableBalance: any;

    if(accountHolder.ATMOption === "Cash Deposit"){
        let balance = await inquirer.prompt(
            {
                message: "Enter amount to deposit",
                type: "number",
                name: "num1",
            });
        let availableBalance = balance.num1;
        console.log("Your available Balance is " + availableBalance);
    let askAnother = await inquirer.prompt(
        {
            message: "Would you like to do another transaction?",
            type: "list",
            choices: ["Yes", "No"],
            name: "respond"
        })

        switch(askAnother.respond === "Yes"){
            case true:
            ATM();
            break
        }    
    } 
        
        else if (accountHolder.ATMOption === "Cash Withdrawal" ){
     let balance = await inquirer.prompt(
        {
            message: "Enter amount to withdraw",
            type: "number",
            name: "num2",
        });
        let availableBalance:any = function Subtract(){availableBalance - balance.num2}
        console.log("Your available Balance is " + availableBalance);
        
}else if (accountHolder.ATMOption === "Balance Inquiry"){

    console.log("Your available Balance is "+ availableBalance);
}else  (
    console.log("Take your card ")
)}

else{
    console.log("Kindly enter correct Password or Username")
}
