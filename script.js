//detect click on button
const minusButton = document.querySelector(".btn1")
const plusButton = document.querySelector(".btn2")
let number = 0
const box = document.querySelector(".number")


minusButton.addEventListener('click', () => {
    //if the click is on the minus button decrease the number
    number--
    //display the number in the box
    box.innerText = number
    console.log(number)
})

plusButton.addEventListener('click', () => {
    //if the click is on the plus button increase the number
    number++
    //display the number in the box
    box.innerText = number  
    console.log(number)
})