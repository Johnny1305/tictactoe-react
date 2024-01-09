// ResetButton.js
import React from 'react';
import "./css/ResetButton.css";

function ResetButton({ onReset }) {
    return (
        <button onClick={onReset} className='restart-button'>Reiniciar partida</button>
    );
}

export default ResetButton;