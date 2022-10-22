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
view.style.height='100px';
view.style.fontSize='70px';
view.style.textAlign='right';
view.style.border=`${gap}px solid lightgrey`;
view.style.borderRadius=`${gap}px ${gap}px 0px 0px`;

view.textContent='000000000';
calculator_container.appendChild(view);

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

for (let i=1;i<20;i++) {

    const button = document.createElement('button');
    button.style.width=button_width+'px';
    button.textContent=i;

    if (i==14) {
        button.style.height=button_height*2+gap;
        button.style.gridRow='span 2';
    } else {
        button.style.height=button_height;
    }

    grid.appendChild(button);

}