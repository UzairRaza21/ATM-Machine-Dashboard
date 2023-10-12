import { AnyARecord, AnyTxtRecord } from "dns";
import inquirer from "inquirer";

function ATM(){
    let accountHolder :any =  inquirer.prompt([
        {
            message: " Select Option",
            type: "list",
            choices: ["Cash Deposit", "Cash Withdrawal", "Balance Inquiry", "Exit"],
            name: "ATMOption"
        }
    ]);   


    let availableBalance: any;

    if(accountHolder.ATMOption === "Cash Deposit"){
        let balance :any =  inquirer.prompt(
            {
                message: "Enter amount to deposit",
                type: "number",
                name: "num1",
            });
        let availableBalance = balance.num1;
        console.log("Your available Balance is " + availableBalance);
    let askAnother : any =  inquirer.prompt(
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
     let balance :any=  inquirer.prompt(
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


export { ATM };