import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Aside.css";

const Aside = () => {
    return (
        <div className="Aside">
            <div className="aside-content">
                <div className="aside-category">
                        <h3>Categorias</h3>
                        <ul className="aside-list">
                            <li><NavLink activeClassName="actived" to="/winners">Ganadores</NavLink></li>
                            <li><NavLink activeClassName="actived" to="/refunds">Reembolsos</NavLink></li>
                            <li><NavLink activeClassName="actived" to="/instructions">Instrucciones</NavLink></li>
                            <li><NavLink activeClassName="actived" to="/lottery">Historico de sorteo</NavLink></li>
                            <li><NavLink activeClassName="actived" to="/sports">Deportes</NavLink></li>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Aside;