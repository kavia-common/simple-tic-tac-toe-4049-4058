import React, { useState, useEffect } from "react";
import Board from "./Board";
import "./App.css";

/**
 * PUBLIC_INTERFACE
 * Main Tic Tac Toe Game app - modern, responsive, two-player
 */
function App() {
  // 'X' starts
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStatus, setGameStatus] = useState({ status: "running", winner: null });
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Check for win/draw on board state change
  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setGameStatus({ status: "won", winner });
    } else if (squares.every((sq) => !!sq)) {
      setGameStatus({ status: "draw", winner: null });
    } else {
      setGameStatus({ status: "running", winner: null });
    }
  }, [squares]);

  // PUBLIC_INTERFACE
  const handleSquareClick = (idx) => {
    if (squares[idx] || gameStatus.status !== "running") return;
    const nextSquares = squares.slice();
    nextSquares[idx] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext((prev) => !prev);
  };

  // PUBLIC_INTERFACE
  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStatus({ status: "running", winner: null });
  };

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  let statusText = "";
  if (gameStatus.status === "won") {
    statusText = `Winner: ${gameStatus.winner}`;
  } else if (gameStatus.status === "draw") {
    statusText = "Draw!";
  } else {
    statusText = `Next: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="App ttt-root">
      <header className="ttt-center-container">
        {/* Theme toggle kept for parity */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <h1 className="ttt-title" style={{ color: "var(--text-primary)" }}>
          Tic Tac Toe
        </h1>
        <div
          className="ttt-status"
          aria-live="polite"
          style={{
            color:
              gameStatus.status === "won"
                ? gameStatus.winner === "X"
                  ? "var(--ttt-x-color)"
                  : "var(--ttt-o-color)"
                : gameStatus.status === "draw"
                ? "var(--ttt-draw-color)"
                : "var(--text-secondary)",
            marginBottom: "1rem",
          }}
        >
          {statusText}
        </div>
        <Board
          squares={squares}
          onClick={handleSquareClick}
          disabled={gameStatus.status !== "running"}
        />
        <button
          className="ttt-reset"
          onClick={handleReset}
          aria-label="Reset game"
        >
          Reset
        </button>
      </header>
    </div>
  );
}

// PUBLIC_INTERFACE
function calculateWinner(squares) {
  // Returns "X", "O", or null
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // cols
    [0, 4, 8],
    [2, 4, 6], // diags
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

export default App;
