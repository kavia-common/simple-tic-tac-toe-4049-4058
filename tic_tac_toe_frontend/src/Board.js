import React from "react";
import Square from "./Square";

/**
 * PUBLIC_INTERFACE
 * Board component for rendering a 3x3 grid of Tic Tac Toe squares.
 * Props:
 *  - squares: array of 9 values (X, O, or null)
 *  - onClick: function(idx) called when square is clicked
 *  - disabled: boolean, disables squares if true
 */
function Board({ squares, onClick, disabled }) {
  return (
    <div className="ttt-board" role="grid" aria-label="Tic Tac Toe Board">
      {[0, 1, 2].map((row) => (
        <div className="ttt-board-row" role="row" key={row}>
          {[0, 1, 2].map((col) => {
            const idx = row * 3 + col;
            return (
              <Square
                key={idx}
                value={squares[idx]}
                onClick={() => onClick(idx)}
                disabled={disabled || !!squares[idx]}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
