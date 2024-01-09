// ModifyNamesButton.js
import React from 'react';
import './css/ResetButton.css';

function ModifyNamesButton({ openModal }) {
    return (
        <button onClick={openModal} className='modify-button'>
            ✏️
        </button>
    );
}

export default ModifyNamesButton;
