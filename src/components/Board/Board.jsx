import React from "react";
import "./Board.css";
import Box from "../Box/Box";
const Board = ({ board, onClick, id }) => {
  return (
    <>
      <div className="board">
        {board.map((box, id, index) => (
          <Box
            value={box}
            id={id}
            key={index}
            onClick={() => box === null && onClick(id)}
          />
        ))}
      </div>
    </>
  );
};
export default Board;
