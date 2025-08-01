//CONTROL FLOW

//EARLY RETURN PATTERN
// function getGrade(score) {
//   if (score >= 0 && score <= 32) return "Fail";
//   else if (score >= 33 && score <= 59) return "D";
//   else if (score >= 60 && score <= 69) return "C";
//   else if (score >= 70 && score <= 79) return "B";
//   else if (score >= 80 && score <= 89) return "A";
//   else if (score >= 90 && score <= 100) return "A+";
//   else return "Invalid marks";
// }
// console.log(getGrade(111));

//ROCK PAPER SCISSOR LOGIC

// function rps(user, computer) {
//THIS GIVE MANY IF ELSE
// if(user == "rock" && computer == "scissor") return "user";
// else if(user == "scissor" && computer == "rock") return "computer";
// else if(user == "paper" && computer =="rock") return "user";
// else if(user == "rock" && computer =="paper") return "computer";
// else if(user == "scissor" && computer =="rock") return "computer";

//HERE IS THE CORRECT WAY
//   if (user === computer) return "draw";
//   if (user == "rock" && computer == "scissor") return "user";
//   if (user == "scissor" && computer == "paper") return "user";
//   if (user == "paper" && computer == "rock") return "user";
//   return "computer";
// }
// console.log(rps("rock", "paper"));

//FALLTHROUGH-->In the switch case if we miss the break other condition run if we miss the break and other condition run then this is fallthrough case.
