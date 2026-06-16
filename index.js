// run `node index.js` in the terminal
let user_name ="Vova";
let user_balance = 90;


if (user_name === "admin") {
  console.log("Администратор");
} else if (user_name === "") {
  console.log("Гость");
} 

if (user_balance > 5000) {
  console.log("Вип-клиент");
} else if (user_balance > 1000) {
  console.log("Постоянный покупатель");
}



