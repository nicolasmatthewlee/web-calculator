const calculator_container = document.createElement('div');
calculator_container.style.backgroundColor = 'blue';
document.body.appendChild(calculator_container);

const view = document.createElement('div');
view.style.backgroundColor = 'green';
view.textContent='000000000';
calculator_container.appendChild(view);

const grid = document.createElement('div');
grid.style.backgroundColor = 'red';
grid.style.grid = 'repeat(4,50px) / repeat(5,50px)';
grid.style.display='grid';
grid.style.width='500px';
grid.style.height='500px';
calculator_container.appendChild(grid);

for (let row=0;row<4;row++) {

    for (let col=0;col<5;col++) {

        let button_number=row*5+col+1;

        const button = document.createElement('button');
        if (button_number==14) {
            button.style.gridRow='span 2';
            button.style.height='100px';
        } else if (button_number==20) {
            break;
        } else {
            button.style.height='50px';
        }
        button.style.width='50px';
        button.textContent=button_number;
        /*button.style.gridRowStart=row;
        button.style.gridRowEnd=row+1;
        button.style.gridColumnStart=col;
        button.style.gridColumnEnd=col+1
        */
        grid.appendChild(button);
    }
    
}