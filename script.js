const grid = document.getElementById("gridBoard");
const colorPicker = document.getElementById("colorPicker");
const clearBtn = document.getElementById("clearBtn");


for(let i = 0; i < 192; i++ ){
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);

  cell.addEventListener('click', () => {
    cell.style.backgroundColor = colorPicker.value ;
  });
  
}

clearBtn.addEventListener('click', () => {
  const allCells = document.querySelectorAll('.cell');
  allCells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  })
})