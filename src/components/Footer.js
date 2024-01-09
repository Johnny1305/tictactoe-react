// Footer.js
import React from 'react';
import './css/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p>&copy; Casi todos los derechos reservados. Desarrollado por <a href="https://johnnyportfolio.x10.mx" target="_blank" rel="noopener noreferrer">Johnny13</a>.</p>
            <p>Hecho con
                <span className='heartbeat'>
                    <svg width="15" height="15" viewBox="0 0 100 100">
                        <path fill="tomato" d="M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52C32.75-2.42,17-2.42,7.29,7.27v0 c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z"></path>
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1; 1.5; 1.25; 1.5; 1.5; 1;"
                            dur="5s"
                            repeatCount="indefinite">
                        </animateTransform>
                    </svg>
                </span>
            </p>
        </div>
    );
}

export default Footer;
