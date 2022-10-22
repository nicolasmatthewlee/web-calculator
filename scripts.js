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
grid.style.rowGap='10px';
grid.style.columnGap='10px';
grid.style.display='grid';
calculator_container.appendChild(grid);

for (let i=1;i<20;i++) {

    const button = document.createElement('button');
    button.style.width='50px';
    button.textContent=i;

    if (i==14) {
        button.style.height='100px';
        button.style.gridRow='span 2';
    } else {
        button.style.height='50px';
    }

    grid.appendChild(button);

}