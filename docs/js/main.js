const chessBoards = document.querySelectorAll("td");
let colorWhite = true;
let startPosition;
let figure;
chessBoards.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    figure = e.target;
    startPosition = e.target.closest("td");
    console.log(figure.closest("td"));
    console.log(startPosition);
    console.log(figure.dataset.color);
    console.log(e.target.closest("td").lastElementChild);
    console.log(Number(startPosition.dataset.y));
  });

  item.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  item.addEventListener("drop", (e) => {
    // pawn-white
    if (
      Number(startPosition.dataset.y) + 1 === Number(e.target.dataset.y) &&
      Number(startPosition.dataset.x) === Number(e.target.dataset.x) &&
      figure.dataset.color === "white" &&
      colorWhite === true &&
      figure.dataset.type === "pawn"
    ) {
      e.target.append(figure);
      colorWhite = false;
    }
    if (
      Number(startPosition.dataset.y) + 1 ===
        Number(e.target.closest("td").dataset.y) &&
      Number(startPosition.dataset.x) - 1 ===
        Number(e.target.closest("td").dataset.x) &&
      figure.dataset.color === "white" &&
      colorWhite === true &&
      figure.dataset.type === "pawn" &&
      figure.dataset.color !== e.target.dataset.color &&
      e.target.dataset.type !== "king"
    ) {
      if (e.target.closest("td").children.length === 1) {
        e.target.closest("td").append(figure);
        e.target.remove();
        colorWhite = false;
      }
    }

    if (
      Number(startPosition.dataset.y) + 1 ===
        Number(e.target.closest("td").dataset.y) &&
      Number(startPosition.dataset.x) + 1 ===
        Number(e.target.closest("td").dataset.x) &&
      figure.dataset.color === "white" &&
      colorWhite === true &&
      figure.dataset.type === "pawn" &&
      figure.dataset.color !== e.target.dataset.color &&
      e.target.dataset.type !== "king"
    ) {
      if (e.target.closest("td").children.length === 1) {
        e.target.closest("td").append(figure);
        e.target.remove();
        colorWhite = false;
      }
    }
    // king-white
    if (
      ((Number(startPosition.dataset.y) + 1 === Number(e.target.dataset.y) &&
        Number(startPosition.dataset.x) === Number(e.target.dataset.x) &&
        figure.dataset.type === "king" &&
        figure.dataset.color === "white") ||
        (Number(startPosition.dataset.y) - 1 === Number(e.target.dataset.y) &&
          Number(startPosition.dataset.x) === Number(e.target.dataset.x) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "white") ||
        (Number(startPosition.dataset.x) + 1 === Number(e.target.dataset.x) &&
          Number(startPosition.dataset.y) === Number(e.target.dataset.y) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "white") ||
        (Number(startPosition.dataset.x) - 1 === Number(e.target.dataset.x) &&
          Number(startPosition.dataset.y) === Number(e.target.dataset.y) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "white") ||
        (Number(startPosition.dataset.y) + 1 === Number(e.target.dataset.y) &&
          Number(startPosition.dataset.x) + 1 === Number(e.target.dataset.x) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "white") ||
        (Number(startPosition.dataset.y) - 1 === Number(e.target.dataset.y) &&
          Number(startPosition.dataset.x) - 1 === Number(e.target.dataset.x) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "white") ||
        (Number(startPosition.dataset.x) + 1 === Number(e.target.dataset.x) &&
          Number(startPosition.dataset.y) - 1 === Number(e.target.dataset.y) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "white") ||
        (Number(startPosition.dataset.x) - 1 === Number(e.target.dataset.x) &&
          Number(startPosition.dataset.y) + 1 === Number(e.target.dataset.y) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "white")) &&
      colorWhite === true
    ) {
      e.target.append(figure);
      colorWhite = false;
    } else if (
      (Number(startPosition.dataset.y) + 1 ===
        Number(e.target.closest("td").dataset.y) &&
        Number(startPosition.dataset.x) ===
          Number(e.target.closest("td").dataset.x) &&
        figure.dataset.type === "king" &&
        figure.dataset.color !== e.target.dataset.color &&
        figure.dataset.color === "white" &&
        figure.dataset.type !== e.target.dataset.type) ||
      (Number(startPosition.dataset.y) - 1 ===
        Number(e.target.closest("td").dataset.y) &&
        Number(startPosition.dataset.x) ===
          Number(e.target.closest("td").dataset.x) &&
        figure.dataset.type === "king" &&
        figure.dataset.color === "white" &&
        figure.dataset.color !== e.target.dataset.color &&
        figure.dataset.type !== e.target.dataset.type) ||
      (Number(startPosition.dataset.x) + 1 ===
        Number(e.target.closest("td").dataset.x) &&
        Number(startPosition.dataset.y) ===
          Number(e.target.closest("td").dataset.y) &&
        figure.dataset.type === "king" &&
        figure.dataset.color === "white" &&
        figure.dataset.color !== e.target.dataset.color &&
        figure.dataset.type !== e.target.dataset.type) ||
      (Number(startPosition.dataset.x) - 1 ===
        Number(e.target.closest("td").dataset.x) &&
        Number(startPosition.dataset.y) ===
          Number(e.target.closest("td").dataset.y) &&
        figure.dataset.type === "king" &&
        figure.dataset.color === "white" &&
        figure.dataset.color !== e.target.dataset.color &&
        figure.dataset.type !== e.target.dataset.type) ||
      (Number(startPosition.dataset.y) + 1 ===
        Number(e.target.closest("td").dataset.y) &&
        Number(startPosition.dataset.x) + 1 ===
          Number(e.target.closest("td").dataset.x) &&
        figure.dataset.type === "king" &&
        figure.dataset.color === "white" &&
        figure.dataset.color !== e.target.dataset.color &&
        figure.dataset.type !== e.target.dataset.type) ||
      (Number(startPosition.dataset.y) - 1 ===
        Number(e.target.closest("td").dataset.y) &&
        Number(startPosition.dataset.x) - 1 ===
          Number(e.target.closest("td").dataset.x) &&
        figure.dataset.type === "king" &&
        figure.dataset.color === "white" &&
        figure.dataset.color !== e.target.dataset.color &&
        figure.dataset.type !== e.target.dataset.type) ||
      (Number(startPosition.dataset.x) + 1 ===
        Number(e.target.closest("td").dataset.x) &&
        Number(startPosition.dataset.y) - 1 ===
          Number(e.target.closest("td").dataset.y) &&
        figure.dataset.type === "king" &&
        figure.dataset.color === "white" &&
        figure.dataset.color !== e.target.dataset.color &&
        figure.dataset.type !== e.target.dataset.type) ||
      (Number(startPosition.dataset.x) - 1 ===
        Number(e.target.closest("td").dataset.x) &&
        Number(startPosition.dataset.y) + 1 ===
          Number(e.target.closest("td").dataset.y) &&
        figure.dataset.type === "king" &&
        figure.dataset.color === "white" &&
        figure.dataset.color !== e.target.dataset.color &&
        figure.dataset.type !== e.target.dataset.type)
    ) {
      if (e.target.closest("td").children.length === 1 && colorWhite === true) {
        e.target.closest("td").append(figure);
        e.target.remove();
        colorWhite = false;
      }
    }

    // pawn-black
    if (
      Number(startPosition.dataset.y) - 1 === Number(e.target.dataset.y) &&
      Number(startPosition.dataset.x) === Number(e.target.dataset.x) &&
      figure.dataset.color === "black" &&
      colorWhite === false &&
      figure.dataset.type === "pawn"
    ) {
      e.target.append(figure);
      colorWhite = true;
    }

    if (
      Number(startPosition.dataset.y) - 1 ===
        Number(e.target.closest("td").dataset.y) &&
      Number(startPosition.dataset.x) - 1 ===
        Number(e.target.closest("td").dataset.x) &&
      figure.dataset.color === "black" &&
      figure.dataset.type === "pawn" &&
      colorWhite === false &&
      figure.dataset.color !== e.target.dataset.color &&
      e.target.dataset.type !== "king"
    ) {
      if (e.target.closest("td").children.length === 1) {
        e.target.parentElement.append(figure);
        e.target.remove();
        colorWhite = true;
      }
    }
    if (
      Number(startPosition.dataset.y) - 1 ===
        Number(e.target.closest("td").dataset.y) &&
      Number(startPosition.dataset.x) + 1 ===
        Number(e.target.closest("td").dataset.x) &&
      figure.dataset.color === "black" &&
      figure.dataset.type === "pawn" &&
      colorWhite === false &&
      figure.dataset.color !== e.target.dataset.color &&
      e.target.dataset.type !== "king"
    ) {
      if (e.target.closest("td").children.length === 1) {
        e.target.closest("td").append(figure);
        e.target.remove();
        colorWhite = true;
      }
    }
    console.log();
    console.log(startPosition.dataset.y);
    // king-black

    if (
      ((Number(startPosition.dataset.y) + 1 === Number(e.target.dataset.y) &&
        Number(startPosition.dataset.x) === Number(e.target.dataset.x) &&
        figure.dataset.type === "king" &&
        figure.dataset.color === "black") ||
        (Number(startPosition.dataset.y) - 1 === Number(e.target.dataset.y) &&
          Number(startPosition.dataset.x) === Number(e.target.dataset.x) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black") ||
        (Number(startPosition.dataset.x) + 1 === Number(e.target.dataset.x) &&
          Number(startPosition.dataset.y) === Number(e.target.dataset.y) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black") ||
        (Number(startPosition.dataset.x) - 1 === Number(e.target.dataset.x) &&
          Number(startPosition.dataset.y) === Number(e.target.dataset.y) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black") ||
        (Number(startPosition.dataset.y) + 1 === Number(e.target.dataset.y) &&
          Number(startPosition.dataset.x) + 1 === Number(e.target.dataset.x) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black") ||
        (Number(startPosition.dataset.y) - 1 === Number(e.target.dataset.y) &&
          Number(startPosition.dataset.x) - 1 === Number(e.target.dataset.x) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black") ||
        (Number(startPosition.dataset.x) + 1 === Number(e.target.dataset.x) &&
          Number(startPosition.dataset.y) - 1 === Number(e.target.dataset.y) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black") ||
        (Number(startPosition.dataset.x) - 1 === Number(e.target.dataset.x) &&
          Number(startPosition.dataset.y) + 1 === Number(e.target.dataset.y) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black")) &&
      colorWhite === false
    ) {
      e.target.append(figure);
      colorWhite = true;
    } else if (
      ((Number(startPosition.dataset.y) + 1 ===
        Number(e.target.closest("td").dataset.y) &&
        Number(startPosition.dataset.x) ===
          Number(e.target.closest("td").dataset.x) &&
        figure.dataset.type === "king" &&
        figure.dataset.color !== e.target.dataset.color &&
        figure.dataset.color === "black") ||
        (Number(startPosition.dataset.y) - 1 ===
          Number(e.target.closest("td").dataset.y) &&
          Number(startPosition.dataset.x) ===
            Number(e.target.closest("td").dataset.x) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black" &&
          figure.dataset.color !== e.target.dataset.color &&
          figure.dataset.type !== e.target.dataset.type) ||
        (Number(startPosition.dataset.x) + 1 ===
          Number(e.target.closest("td").dataset.x) &&
          Number(startPosition.dataset.y) ===
            Number(e.target.closest("td").dataset.y) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black" &&
          figure.dataset.color !== e.target.dataset.color &&
          figure.dataset.type !== e.target.dataset.type) ||
        (Number(startPosition.dataset.x) - 1 ===
          Number(e.target.closest("td").dataset.x) &&
          Number(startPosition.dataset.y) ===
            Number(e.target.closest("td").dataset.y) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black" &&
          figure.dataset.color !== e.target.dataset.color &&
          figure.dataset.type !== e.target.dataset.type) ||
        (Number(startPosition.dataset.y) + 1 ===
          Number(e.target.closest("td").dataset.y) &&
          Number(startPosition.dataset.x) + 1 ===
            Number(e.target.closest("td").dataset.x) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black" &&
          figure.dataset.color !== e.target.dataset.color &&
          figure.dataset.type !== e.target.dataset.type) ||
        (Number(startPosition.dataset.y) - 1 ===
          Number(e.target.closest("td").dataset.y) &&
          Number(startPosition.dataset.x) - 1 ===
            Number(e.target.closest("td").dataset.x) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black" &&
          figure.dataset.color !== e.target.dataset.color &&
          figure.dataset.type !== e.target.dataset.type) ||
        (Number(startPosition.dataset.x) + 1 ===
          Number(e.target.closest("td").dataset.x) &&
          Number(startPosition.dataset.y) - 1 ===
            Number(e.target.closest("td").dataset.y) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black" &&
          figure.dataset.color !== e.target.dataset.color &&
          figure.dataset.type !== e.target.dataset.type) ||
        (Number(startPosition.dataset.x) - 1 ===
          Number(e.target.closest("td").dataset.x) &&
          Number(startPosition.dataset.y) + 1 ===
            Number(e.target.closest("td").dataset.y) &&
          figure.dataset.type === "king" &&
          figure.dataset.color === "black" &&
          figure.dataset.color !== e.target.dataset.color &&
          figure.dataset.type !== e.target.dataset.type)) &&
      colorWhite === false
    ) {
      if (e.target.closest("td").children.length === 1) {
        e.target.closest("td").append(figure);
        e.target.remove();
        colorWhite = true;
      }
    }
  });
});
