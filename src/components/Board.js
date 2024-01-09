// Board.js
import React, { useState } from 'react';
import Square from './Square';
import Swal from 'sweetalert2';
import "./css/Board.css";

function Board({ xIsNext, squares, onPlay, defaultPlayerXName = 'X', defaultPlayerOName = 'O' }) {
    const [playerXName, setPlayerXName] = useState(defaultPlayerXName);
    const [playerOName, setPlayerOName] = useState(defaultPlayerOName);

    function handlePlayerNameChange(player, newName) {
        if (player === 'X') {
            setPlayerXName(newName);
        } else if (player === 'O') {
            setPlayerOName(newName);
        }
    }
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        let winnerName = winner === 'X' ? playerXName : playerOName;
        Swal.fire('¡Tenemos un ganador!', `¡El jugador ${winnerName} ha ganado!`, 'success');
    } else {
        status = 'Siguiente Jugador: ' + (xIsNext ? (playerXName !== '' ? playerXName : 'X') : (playerOName !== '' ? playerOName : 'O'));
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div>
                <label>
                    Nombre del Jugador X:
                    <input
                        type="text"
                        value={playerXName}
                        onChange={(e) => handlePlayerNameChange('X', e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Nombre del Jugador O:
                    <input
                        type="text"
                        value={playerOName}
                        onChange={(e) => handlePlayerNameChange('O', e.target.value)}
                    />
                </label>
            </div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board;