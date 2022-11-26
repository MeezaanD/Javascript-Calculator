let button = document.querySelectorAll('button');
let screenValue = '';


let allowDecimal = true;
function displayDecimal(value) {
    if (allowDecimal) {
        screen.value += value
        allowDecimal = false
    }
}

let screen = document.getElementById('screen');
function display(arg){
    screen.value += arg;
}

function displayOp(arg){
    
    screen.value += arg;
    allowDecimal = true
}

const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener ('click', ()=>{
    if (screen !== ''){
        screen.value = eval(screen.value);

        if (screen.value.includes('.')){
            allowDecimal = false
        }else allowDecimal = true
    }
})

const clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', ()=>{
    if (screen !==''){
        screen.value = "";
        allowDecimal= true;
    }
})







 