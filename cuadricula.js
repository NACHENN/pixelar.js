function setup() {
    createCanvas(400, 400); 
    drawGrid(40); 
  }
  
  function drawGrid(cellSize) {
    for (let x = 0; x <= width; x += cellSize) {
      line(x, 0, x, height);
    }
  
    for (let y = 0; y <= height; y += cellSize) {
      line(0, y, width, y);
    }
  }
  