import React from "react";

const Square = ({ value, onClick }) => (
  <button
    className="w-24 h-24 border-2 border-gray-500 text-2xl"
    onClick={onClick}
  >
    {value}
  </button>
);

const Board = ({ squares, onClick }) => (
  <div className="grid grid-cols-3 gap-2">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
