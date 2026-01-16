// YOUR CODE HERE
console.log("Script Running.");
const light1 = document.querySelector("#lightbulb1");
const light2 = document.querySelector("#lightbulb2");
const light3 = document.querySelector("#lightbulb3");
const light4 = document.querySelector("#lightbulb4");
const light5 = document.querySelector("#lightbulb5");
const light6 = document.querySelector("#lightbulb6");
const light7 = document.querySelector("#lightbulb7");
const light8 = document.querySelector("#lightbulb8");
const light9 = document.querySelector("#lightbulb9");
const switch1 = document.querySelector("#switch1");
const switch2 = document.querySelector("#switch2");
const switch3 = document.querySelector("#switch3");
const switch4 = document.querySelector("#switch4");
const switch5 = document.querySelector("#switch5");
const switch6 = document.querySelector("#switch6");
const switch7 = document.querySelector("#switch7");
const switch8 = document.querySelector("#switch8");
const switch9 = document.querySelector("#switch9");
const masterSwitch = document.querySelector("#masterSwitch");
const resetSwitch = document.querySelector("#reset");
const randomBtn = document.querySelector("#random");
const numbers = [0, 0, 0];


const switchingLights = (x) => {
    switch(x){
        case 1:
            light1.classList.toggle("active");
            break;
        case 2:
            light2.classList.toggle("active");
            break;
        case 3:
            light3.classList.toggle("active");
            break;
        case 4:
            light4.classList.toggle("active");
            break;
        case 5:
            light5.classList.toggle("active");
            break;
        case 6:
            light6.classList.toggle("active");
            break;
        case 7:
            light7.classList.toggle("active");
            break;
        case 8:
            light8.classList.toggle("active");
            break;
        case 9:
            light9.classList.toggle("active");
            break;
        default:
            console.log("hi");
            break;
    }        
}



const change38 = () => {
    switchingLights(3);
    switchingLights(8)
}
const change17 = () => {
    switchingLights(1);
    switchingLights(7);
}
const change468 = () => {
    switchingLights(4);
    switchingLights(6);
    switchingLights(8);
}
const change29 = () => {
    switchingLights(2);        switchingLights(9);
}
const change57 = () => {
    switchingLights(5);
    switchingLights(7);
}
const change14 = () => {
    light1.classList.toggle("active");
    light4.classList.toggle("active");
}
const change23 = () => {
    switchingLights(2);
    switchingLights(3);
}
const change59 = () => {
    switchingLights(5);
    switchingLights(9);
}
const change67 = () => {
    switchingLights(6);
    switchingLights(7);
}
const masterChange = () => {
    switchingLights(1);
    switchingLights(2);
    switchingLights(3);
    switchingLights(4);
    switchingLights(5);
    switchingLights(6);
    switchingLights(7);
    switchingLights(8);
    switchingLights(9);

}
const reset = () => {
    light1.classList.remove("active");
    light2.classList.remove("active");
    light3.classList.remove("active");
    light4.classList.remove("active");
    light5.classList.remove("active");
    light6.classList.remove("active");
    light7.classList.remove("active");
    light8.classList.remove("active");
    light9.classList.remove("active");
    switch1.checked = false;
    switch2.checked = false;
    switch3.checked = false;
    switch4.checked = false;
    switch5.checked = false;
    switch6.checked = false;
    switch7.checked = false;
    switch8.checked = false;
    switch9.checked = false;
}



const randomNums = (max) =>{
    let a = 0;
    let b = a;
    let c = b
    while(a == b | b == c | c==a){
        for (let i = 0; i < max; i++){
            let randNum = Math.floor(Math.random()*9+1);
            // console.log("random number is:");
            // console.log(randNum);
            // console.log(a, b, c)
            c = b;
            b = a;
            a = randNum;
        }
    }
    numbers[0] = a;
    numbers[1] = b;
    numbers[2] = c;
    return console.log(numbers);
}
const abc = ["a", "b", "c"];

// for(let i = 0; i <10; i++){
//     switchingLights(i);
// }

const randomizerv2 = () =>{
    reset();
    randomNums(4);
    
    numbers.forEach((i) =>{
        switchingLights(i);
    });
};
// async function delay() {
//     console.log("Start");
//     // Creates a promise that resolves after 5000 milliseconds (5 seconds)
//     await new Promise(resolve => setTimeout(resolve, 5000));
//     console.log("Waited for 5 seconds");
//     console.log("End");
// }

// for(let i = 0; i<30; i++){
//     randomizerv2()
//     delay()
// }


switch1.addEventListener('change', change38);
switch2.addEventListener('change', change17);
switch3.addEventListener('change', change468);
switch4.addEventListener('change', change29);
switch5.addEventListener('change', change57);
switch6.addEventListener('change', change14);
switch7.addEventListener('change', change23);
switch8.addEventListener('change', change59);
switch9.addEventListener('change', change67);
masterSwitch.addEventListener("change",masterChange);
resetSwitch.addEventListener("click", reset)
randomBtn.addEventListener("click", randomizerv2)