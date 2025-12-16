import React from "react";
import "./App.css";

/**
 * PUBLIC_INTERFACE
 * Navbar component for the Tic Tac Toe app.
 * Displays the left-aligned app title and uses the provided light theme.
 */
function Navbar() {
  return (
    <nav
      className="ttt-navbar"
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 100,
        background: "#ffffff",
        borderBottom: "1px solid var(--border-color)",
        padding: "0.6rem 0",
        boxShadow: "0 2px 8px 0 rgba(60, 119, 206, 0.04)",
      }}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          minHeight: "48px",
          padding: "0 2rem",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "1.35rem",
            color: "#111827",
            letterSpacing: "0.03em",
            fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
          }}
          className="ttt-navbar-title"
        >
          Tic Tac Toe
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
