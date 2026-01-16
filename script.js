// YOUR CODE HERE
console.log("Script Running.");
let lights={
    1 : document.querySelector("#lightbulb1"),
    2: document.querySelector("#lightbulb2"),
    3:document.querySelector("#lightbulb3"),
    4:document.querySelector("#lightbulb4"),
    5:document.querySelector("#lightbulb5"),
    6:document.querySelector("#lightbulb6"),
    7:document.querySelector("#lightbulb7"),
    8:document.querySelector("#lightbulb8"),
    9:document.querySelector("#lightbulb9")
}

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


const rgb = (a, b, c) => {
    return `rgb(${a},${b},${c})`;
}


const bgChange = () =>{
    let r = 0;
    let g = 0;
    let b = 0; 
    let bg = rgb(r,g,b)
    for( var i in lights){


        if( lights[i].classList.contains("active") && r>= 0 && b>=0){
            r -= 28;
            b -=28;
            g += 28;
            if (r<0){
                r=0;
                b = 0;
            }
            bg = rgb(r,g,b);
            console.log(bg);
            document.querySelector("#wrapper").style.backgroundColor = bg;   
        }
        else{
            r += 28;
            b +=28;
            g -= 28;
            if (g<0){
                g=0;
            }
            let bg = rgb(r,g,b)
            console.log("for those off "+ bg)
            document.querySelector("#wrapper").style.backgroundColor = bg;   
        }
        console.log("light "+ i)
    } 
}



const switchingLights = (x) => {
    switch(x){
        case 1:
            lights[1].classList.toggle("active");

            break;
        case 2:
            lights[2].classList.toggle("active");
            break;
        case 3:
            lights[3].classList.toggle("active");
            break;
        case 4:
            lights[4].classList.toggle("active");
            break;
        case 5:
            lights[5].classList.toggle("active");
            break;
        case 6:
            lights[6].classList.toggle("active");
            break;
        case 7:
            lights[7].classList.toggle("active");
            break;
        case 8:
            lights[8].classList.toggle("active");
            break;
        case 9:
            lights[9].classList.toggle("active");
            break;
        default:
            console.log("hi");
            break;
    }        
}



const change38 = () => {
    switchingLights(3);
    switchingLights(8);
    bgChange();
}
const change17 = () => {
    switchingLights(1);
    switchingLights(7);
    bgChange();
}
const change468 = () => {
    switchingLights(4);
    switchingLights(6);
    switchingLights(8);
    bgChange();
}
const change29 = () => {
    switchingLights(2);        switchingLights(9);
    bgChange();
}
const change57 = () => {
    switchingLights(5);
    switchingLights(7);
    bgChange();
}
const change14 = () => {
    switchingLights(1);
    switchingLights(4);
    bgChange()
}
const change23 = () => {
    switchingLights(2);
    switchingLights(3);
    bgChange();
}
const change59 = () => {
    switchingLights(5);
    switchingLights(9);
    bgChange();
}
const change67 = () => {
    switchingLights(6);
    switchingLights(7);
    bgChange();
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
    bgChange();

}
const reset = () => {
    lights[1].classList.remove("active");
    lights[2].classList.remove("active");
    lights[3].classList.remove("active");
    lights[4].classList.remove("active");
    lights[5].classList.remove("active");
    lights[6].classList.remove("active");
    lights[7].classList.remove("active");
    lights[8].classList.remove("active");
    lights[9].classList.remove("active");
    switch1.checked = false;
    switch2.checked = false;
    switch3.checked = false;
    switch4.checked = false;
    switch5.checked = false;
    switch6.checked = false;
    switch7.checked = false;
    switch8.checked = false;
    switch9.checked = false;
    bgChange();
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

const randomizerv2 = () =>{
    reset();
    randomNums(4);
    
    numbers.forEach((i) =>{
        switchingLights(i);
        bgChange();
    });
};

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