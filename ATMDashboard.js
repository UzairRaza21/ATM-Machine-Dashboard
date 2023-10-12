import inquirer from "inquirer";
function ATM() {
    let accountHolder = inquirer.prompt([
        {
            message: " Select Option",
            type: "list",
            choices: ["Cash Deposit", "Cash Withdrawal", "Balance Inquiry", "Exit"],
            name: "ATMOption"
        }
    ]);
    let availableBalance;
    if (accountHolder.ATMOption === "Cash Deposit") {
        let balance = inquirer.prompt({
            message: "Enter amount to deposit",
            type: "number",
            name: "num1",
        });
        let availableBalance = balance.num1;
        console.log("Your available Balance is " + availableBalance);
        let askAnother = inquirer.prompt({
            message: "Would you like to do another transaction?",
            type: "list",
            choices: ["Yes", "No"],
            name: "respond"
        });
        switch (askAnother.respond === "Yes") {
            case true:
                ATM();
                break;
        }
    }
    else if (accountHolder.ATMOption === "Cash Withdrawal") {
        let balance = inquirer.prompt({
            message: "Enter amount to withdraw",
            type: "number",
            name: "num2",
        });
        let availableBalance = function Subtract() { availableBalance - balance.num2; };
        console.log("Your available Balance is " + availableBalance);
    }
    else if (accountHolder.ATMOption === "Balance Inquiry") {
        console.log("Your available Balance is " + availableBalance);
    }
    else
        (console.log("Take your card "));
}
export { ATM };
