
const container = document.querySelector('.container');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(let c = 0; c < (rows*cols); c++){
        let cell = document.createElement("div");
        
        container.appendChild(cell).className = 'grid-item';
    }

    

}

makeGrid(16, 16);


function paintCells(){
    let allCells = document.querySelectorAll('.grid-item');

    for (let cell of allCells){
        cell.addEventListener('mouseover', function(){
            cell.style.backgroundColor = "blue";
        });
    }
}


paintCells();



let clearButton = document.querySelector('#clear-grid');

clearButton.addEventListener('click', function(){
    let rows = window.prompt('Quantas linhas?');
    let cols = window.prompt('Quantas colunas?');

    container.innerHTML = "";

    makeGrid(rows, cols);
    paintCells();

});