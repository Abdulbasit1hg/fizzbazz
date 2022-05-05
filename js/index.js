// var elsvitich = document.querySelector(".svitich");

// var sum = 9433.34;
// var euro = 10354.03;

// var airTicket = 500;
// var hotel = 250;
// var travel = 120;

// var userName = prompt("Ismingizni kiriting");
// var userMoney = Number(prompt(userName + ' Mablagingizni kiriting'))

// var amount = sum * (airTicket + hotel) + travel * euro;
// console.log(amount)

// if(amount <= userMoney){
//     elsvitich.textContent = "Oq yo'l " + userName;
// }
// else{
//     elsvitich.textContent = "keyingi safar albatta borasiz" + userName;
// } 


let fizzBazz = prompt("Sonni kiriting")

for(let i=1; i<=fizzBazz; i++){
    if(i%15===0) console.log("FizzBuzz")
    else if(i%3===0) console.log("Fizz")
    else if(i%5===0) console.log("Buzz")
}
