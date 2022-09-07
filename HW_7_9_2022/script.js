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
