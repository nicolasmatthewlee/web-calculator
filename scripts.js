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

for (let i=1;i<20;i++) {

    let height='50px';
    let span='span 1';
        
    if (i==14) {
        height='100px';
        span='span 2';
    }

    const button = document.createElement('button');
    button.style.width='50px';
    button.style.height=height;
    button.style.gridRow=span;
    button.textContent=i;
    grid.appendChild(button);

}