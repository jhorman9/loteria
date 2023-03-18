import React from 'react';
import '../styles/Footer.css'
import Logo from '../images/blueLogo.png'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="footer-content">
                <div className="footer-primary">
                    <div className="logo">
                        <img src={Logo} alt="LOGO" />
                    </div>
                    <div className="navigator">
                        <h4>NAVEGACIÓN</h4>
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
                        <h4>SERVICIOS</h4>
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
                        <h4>LEGAL</h4>
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