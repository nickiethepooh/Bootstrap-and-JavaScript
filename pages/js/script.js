function changeText() {
    let title = document.getElementById("title");
    title.innerHTML = "Drink with the Barrels";
} //Output Header Change

function add(num1, num2) {
    console.log(num1 + num2);
}

add(5, 10); //Output 15

let age = 18

if (age >= 18) {
    console.log("You can enter");
}
else {
    console.log("You are too young to enter")
} //Output "You can enter"

function greetGuests() {
    let guests = ["Anna", "Ben", "Charlie"]; // this is an array
    let greeting = "Welcome to the event, "; // this is a string

    for (let i = 0; i < guests.length; i++) {
        console.log(greeting + guests[i]); // combine string + array value
    }
}
