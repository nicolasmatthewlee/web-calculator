document.body.style.display='flex';
document.body.style.justifyContent='center';
document.body.style.height='100vh';
document.body.style.margin=0;

const calculator_container = document.createElement('div');
calculator_container.style.display='flex';
calculator_container.style.flexDirection='column';
calculator_container.style.justifyContent='center';
document.body.appendChild(calculator_container);

let gap=10;

const view = document.createElement('div');
view.style.backgroundColor = 'rgb(0,200,0)';
view.style.display='flex';
view.style.justifyContent='right';
view.style.height='100px';
view.style.fontSize='70px';
view.style.border=`${gap}px solid lightgrey`;
view.style.borderRadius=`${gap}px ${gap}px 0px 0px`;
calculator_container.appendChild(view);

const display = document.createElement('div');
//input.textContent='00000000000';
display.style.marginTop='20px';
display.style.marginRight='20px';
view.appendChild(display);

let button_width=80;
let button_height=60;

const grid = document.createElement('div');
grid.style.border=`${gap}px solid lightgrey`;
grid.style.borderRadius=`0px 0px ${gap}px ${gap}px`;
grid.style.backgroundColor = 'lightgrey';
grid.style.grid = `repeat(4,${button_height+'px'}) / repeat(5,${button_width+'px'})`;
grid.style.rowGap=gap+'px';
grid.style.columnGap=gap+'px';
grid.style.display='grid';
calculator_container.appendChild(grid);

// converts from key number to input
function key_to_input(key_number) {
    switch (key_number) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return '%';
        case 5:
            return 'sqrt';
        case 6:
            return 4;
        case 7:
            return 5;
        case 8:
            return 6;
        case 9:
            return 'x';
        case 10:
            return '/';
        case 11:
            return 7;
        case 12:
            return 8;
        case 13:
            return 9;
        case 14:
            return '+';
        case 15:
            return '-';
        case 16:
            return 0;
        case 17:
            return '.';
        case 18:
            return '+/-';
        case 19:
            return '=';
    }
}

let num1='';
let num2='';
let operator=null;

function compute() {
    switch (operator) {
        case '+':
            display.textContent=+num1 + +num2;
            break;
        case '-':
            display.textContent=+num1 - +num2;
            break;
        case 'x':
            display.textContent=+num1 * +num2;
            break;
        case '/':
            display.textContent=+num1 / +num2;
            break;
        case '%':
            display.textContent=+num1 % +num2;
            break;
    }

    num1='';
    num2='';
    operator=null;

}

function process(input) {
    if (typeof(input)=='number') {
        if (operator==null) {
            num1+=input;
            display.textContent=num1;
        } else {
            num2+=input;
            display.textContent=num2;
        }
        
    } else if (['+','-','x','/','%','sqrt'].includes(input)) {
        operator=input;
        display.textContent=operator;
    } else if (input == '=') {
        compute();
    }
}

for (let i=1;i<20;i++) {

    const button = document.createElement('button');
    button.addEventListener('click',() => {process(key_to_input(i));});

    button.style.width=button_width+'px';
    button.textContent=key_to_input(i);

    if (i==14) {
        button.style.height=button_height*2+gap;
        button.style.gridRow='span 2';
    } else {
        button.style.height=button_height;
    }

    grid.appendChild(button);

}
