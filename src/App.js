// Game.js
import React, { useState } from 'react';
import "./App.css";
import Board from './components/Board.js';
import ResetButton from './components/ResetButton';


function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setXIsNext(true);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
        <ResetButton onReset={resetGame} />
      </div>
      
    </div>
  );
}

export default Game;