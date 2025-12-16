import React from "react";

/**
 * PUBLIC_INTERFACE
 * Square component for individual Tic Tac Toe cells.
 * Props:
 *  - value: "X", "O", or null
 *  - onClick: function
 *  - disabled: boolean
 */
function Square({ value, onClick, disabled }) {
  return (
    <button
      className="ttt-square"
      role="gridcell"
      aria-label={value ? value : "Empty"}
      onClick={onClick}
      disabled={disabled}
      tabIndex="0"
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
        color:
          value === "X"
            ? "var(--ttt-x-color)"
            : value === "O"
            ? "var(--ttt-o-color)"
            : "var(--text-primary)",
        backgroundColor: "var(--ttt-square-bg)",
      }}
    >
      {value}
    </button>
  );
}

export default Square;
