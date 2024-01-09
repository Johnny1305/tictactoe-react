// Board.js
import React, { useState } from 'react';
import Square from './Square';
import PlayerNamesModal from './PlayerNamesModal';
import Swal from 'sweetalert2';
import ModifyNamesButton from './ModifyNamesButton'; // Importa el nuevo componente
import "./css/Board.css";

function Board({ xIsNext, squares, onPlay, defaultPlayerXName = 'X', defaultPlayerOName = 'O' }) {
    const [playerXName, setPlayerXName] = useState(defaultPlayerXName);
    const [playerOName, setPlayerOName] = useState(defaultPlayerOName);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handlePlayerNameChange(player, newName) {
        if (player === 'X') {
            setPlayerXName(newName);
        } else if (player === 'O') {
            setPlayerOName(newName);
        }
    }

    function openModal() {
        // Verificar si la partida está en curso y ningún cuadrado está seleccionado
        if (!calculateWinner(squares) && squares.every(square => !square)) {
            setIsModalOpen(true);
        } else if (calculateWinner(squares)) {
            // Permitir abrir el modal después de que la partida ha finalizado
            setIsModalOpen(true);
            // También puedes agregar aquí la lógica para reiniciar el estado de la partida
            // Ejemplo: setSquares(Array(9).fill(null));
        } else {
            // Mostrar mensaje de error si la partida está en curso o algún cuadrado ya está seleccionado
            Swal.fire('Oops...', `No puedes cambiar los nombres mientras la partida está en curso.`, 'error');
        }
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function handleModalSave() {
        closeModal(); // Cerrar el modal después de guardar los cambios
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
        status = (xIsNext ? (playerXName !== '' ? playerXName : 'X') : (playerOName !== '' ? playerOName : 'O'));
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', }}>

                <div className="status">Siguiente Jugador: <br/>{status}</div>
                <div className="status2"><ModifyNamesButton openModal={openModal} /></div>
            </div>

            <PlayerNamesModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSave={handleModalSave}
                playerXName={playerXName}
                playerOName={playerOName}
                onPlayerNameChange={handlePlayerNameChange}
            />
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
