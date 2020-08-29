let sum = a => b => b ? sum(a+b) : a;
// console.log(sum(1)(2)());

// Polyfill bind method
let name = {
    firstName: "Milan",
    lastName: "Chhatralia"
}
let printInfo = function (hometown, state, country){
    console.log(this.firstName +" "+ this.lastName + " from "+ hometown+","+ state+","+country);
}

Function.prototype.myBind = function(...args){
    let func = this,
        params = args.slice(1);
    return function(...newArgs){
        func.apply(args[0],[...params, ...newArgs]);
    }
}
let printName = printInfo.myBind(name,"Anand", "Gujarat", "India");
// printName();



let apiCall = () => {
    console.log("Clicked at "+ new Date().getMilliseconds());
}
// Throttling
const throttle = (func, limit) => {
    let flag = true;
    return (...arguments) => {
        const context = this,
            args = arguments;
        if(flag){
            func.apply(context, args);
            flag = false;
            setTimeout(() => { flag = true }, limit);
        }
    }
}
let throttleClick = throttle(apiCall, 300);

// Debounce
const debounce = (func, delay) => { 
    let debounceTimer;
    return (...arguments) => { 
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer) 
        debounceTimer = setTimeout(() => func.apply(context, args), delay) 
    } 
}
let debounceClick = debounce(apiCall, 300);

window.onload = () => {
    document.querySelector("table")
        .addEventListener("click", (e)=>{
            // console.log(e.target.innerText);
            // throttleClick();
            // debounceClick();
        })
}
