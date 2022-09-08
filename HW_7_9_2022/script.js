//Option 1

window.onload = function () {
  let chessBoard = [];
  let boardRow = [];
  let x, y;
  let id;
  let myCol;
  for (x = 0; x < 8; x++) {
    boardRow = [];
    for (y = 0; y < 8; y++) {
      if ((y + x + 2) % 2 == 0) {
        boardRow.push("Black");
      } else {
        boardRow.push("White");
      }
      id = "myCol_" + x + "_" + y;
      myCol = document.getElementById(id);
      myCol.style.backgroundColor = boardRow[y];
    }
    chessBoard.push(boardRow);
  }
  console.table(chessBoard);
};

//Option 2

// window.onload = function () {
//   let chessBoard = [];
//   let boardRow = [];
//   let x, y;
//   let color1 = "Black";
//   let color2 = "White";
//   let colorTemp;
//   let id;
//   let myCol;
//   for (x = 0; x < 8; x++) {
//     boardRow = [];
//     for (y = 0; y < 4; y++) {
//       boardRow.push(color1);
//       boardRow.push(color2);
//     }
//     chessBoard.push(boardRow);
//     colorTemp = color1;
//     color1 = color2;
//     color2 = colorTemp;
//   }
//   console.table(chessBoard);

//   for (x = 0; x < 8; x++) {
//     for (y = 0; y < 8; y++) {
//       id = "myCol_" + x + "_" + y;
//       myCol = document.getElementById(id);
//       myCol.style.backgroundColor = chessBoard[x][y];
//     }
//   }
// };
