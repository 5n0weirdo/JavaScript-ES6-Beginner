// //Logical AND (&&)
// //Returns TRUE if both operands are TRUE
// console.log(true && true);
// console.log(false && true);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

// logical OR (||)
//Returns TRUE if one of the operands is true
let highIncomePerMonth = true;
let goodCreditScores = false;
let eligibleForLoans = highIncomePerMonth || goodCreditScores;
console.log(eligibleForLoans);

// NOT (!)
let applicationRefused = !eligibleForLoans
console.log(eligibleForLoans);
