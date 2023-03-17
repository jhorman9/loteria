import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="footer-content">
                <div className="footer-primary">
                    <div className="logo">
                        <img src="" alt="LOGO" />
                    </div>
                    <div className="navigator">
                        <h5>Navegación</h5>
                        <ul>
                            <div className="first-list">
                                <li>Home</li>
                                <li>Ganadores</li>
                                <li>Reembolsos</li>
                            </div>
                            <div className="second-list">
                                <li>Instrucciones</li>
                                <li>Acerca De</li>
                            </div>
                        </ul>
                    </div>
                    <div className="services">
                        <h5>Servicios</h5>
                        <ul>
                            <div className="first-list">
                                <li>Home</li>
                                <li>Ganadores</li>
                                <li>Reembolsos</li>
                            </div>
                            <div className="second-list">
                                <li>Instrucciones</li>
                                <li>Acerca De</li>
                            </div>
                        </ul>
                    </div>
                    <div className="legal">
                        <h5>Legal</h5>
                        <ul>
                            <li>Politicas de privacidad</li>
                            <li>Terminos y condiciones</li>
                            <li>Politicas de cookies</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-secondary">
                    <p className='copyright'>Derechos reservados &copy; centro de apuesta </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;