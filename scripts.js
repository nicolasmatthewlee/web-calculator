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

let calculator_body = document.createElement('div');
calculator_body.style.backgroundColor='grey';
calculator_body.style.border=`${gap}px solid grey`;
calculator_body.style.borderRadius=gap+'px';
calculator_container.appendChild(calculator_body);

let view_body = document.createElement('div');
view_body.style.backgroundColor='lightgrey';
view_body.style.border=`${gap}px solid lightgrey`;
view_body.style.borderRadius=`${gap}px ${gap}px 0px 0px`;
calculator_body.appendChild(view_body);

const view = document.createElement('div');
view.style.backgroundColor = 'rgb(0,200,0)';
view.style.display='flex';
view.style.justifyContent='right';
view.style.height='100px';
view.style.fontSize='70px';
view.style.border=`${gap}px solid rgb(0,200,0)`;
view.style.borderRadius=`${gap}px`;
view_body.appendChild(view);

const display = document.createElement('div');
display.textContent='000000000';
display.style.color='darkgreen';
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
calculator_body.appendChild(grid);

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
            return 'clear';
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

    let result=null;

    switch (operator) {
        case '+':
            result=+num1 + +num2;
            break;
        case '-':
            result=+num1 - +num2;
            break;
        case 'x':
            result=+num1 * +num2;
            break;
        case '/':
            result=+num1 / +num2;
            break;
        case '%':
            result=+num1 % +num2;
            break;
        default:
            result=num1;
    }

    decimal_loc=result.toString().indexOf('.')

    // format number to fit in display
    if ((decimal_loc == -1) && (result.toString().length > 9)) {
        display.textContent='error';
    } else if (decimal_loc > 9) {
        display.textContent='error';
    } else {
        formatted_result=result.toString().slice(start=0,end=9)
        display.textContent=formatted_result;
    }

    num1=result.toString();
    num2='';
    operator=null;

}

function process(input) {

    if (typeof(input)=='number') {
        if (operator==null) {

            if (num1.length<9) {
                num1+=input;
                display.textContent=num1;
            }
            
        } else {

            if (num2.length<9) {
                num2+=input;
                display.textContent=num2;
            }

        }
        
    } else if (['+','-','x','/','%'].includes(input)) {

        // if there is a num1 and num2, compute
        if ((num1.length>0) && (num2.length>0)) {
            compute();
            operator=input;
        } else if (num1.length>0) {
            operator=input;
        }

    } else if (input == '+/-') {
        if (operator==null) {

            if (num1.length<9) {
                if (!(num1.includes('-'))) {
                    num1='-'+num1;
                } else {
                    num1 = num1.slice(1);
                }
                display.textContent=num1;
            }
            
        } else {

            if (num2.length<9) {
                if (!(num2.includes('-'))) {
                    num2='-'+num2;
                } else {
                    num2 = num2.slice(1);
                }
                display.textContent=num2;
            }

        }
    
    } else if (input == '.') {

        if (operator==null) {

            if (num1.includes('.')) {
                if (num1.indexOf('.')==num1.length-1) {
                    num1=num1.slice(0,num1.length-1);
                    display.textContent=num1;
                } 
            } else {
                if (num1.length<9) {
                    num1=num1+'.';
                    display.textContent=num1;
                }
            }

        } else {
            if (num2.includes('.')) {
                if (num2.indexOf('.')==num2.length-1) {
                    num2=num2.slice(0,num2.length-1);
                    display.textContent=num2;
                } 
            } else {
                if (num2.length<9) {
                    num2=num2+'.';
                    display.textContent=num2;
                }
            }
        }
    
    } else if (input == '=') {
        compute();
    } else if (input == 'clear') {
        num1='';
        num2='';
        operator=null;
        display.textContent='';
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
