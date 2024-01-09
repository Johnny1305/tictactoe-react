// PlayerNamesModal.js
import React from 'react';
import Modal from 'react-modal';
import './css/ResetButton.css';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
    },
    content: {
        background: '#333',
        color: 'white',
        width: '250px',
        height: '250px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
};

function PlayerNamesModal({ isOpen, onClose, onSave, playerXName, playerOName, onPlayerNameChange }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Modificar Nombres Modal"
        >
            <label>
                Nombre del Jugador X:
                <input
                    type="text"
                    value={playerXName}
                    onChange={(e) => onPlayerNameChange('X', e.target.value)}
                />
            </label>
            <br />
            <label>
                Nombre del Jugador O:
                <input
                    type="text"
                    value={playerOName}
                    onChange={(e) => onPlayerNameChange('O', e.target.value)}
                />
            </label>
            <br />
            <button onClick={onSave} className='restart-button'>Guardar Cambios</button>
        </Modal>
    );
}

export default PlayerNamesModal;
