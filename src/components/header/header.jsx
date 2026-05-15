import React, { useState } from 'react';
import "../header/style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, NavLink } from 'react-router-dom';
import { LOGOTEXT, socialProfiles
 } from '../../contentOption';

const Header = () => {

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
        document.body.classList.toggle("ovhidden");
    };

    return (
        <>
            {/* Agregamos una clase personalizada 'glass-header' */}
            <header className='fixed-top site-header glass-header'>
                <div className='d-flex align-items-center justify-content-between header-container'>
                    
                    <Link className="text-decoration-none logo-text" to="/">
                        {LOGOTEXT}
                    </Link>

                    {/* MENÚ DE ESCRITORIO (Horizontal) */}
                    <div className='nav-menu d-none d-md-flex'>
                        <ul className='d-flex flex-row align-items-center m-0 p-0' style={{ listStyle: 'none', gap: '2.5rem' }}>    
                            <li className='nav-item'>
                                <NavLink to="/" className={({ isActive }) => `modern-nav-link text-decoration-none ${isActive ? 'active-link' : ''}`}>
                                    Inicio
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/about" className={({ isActive }) => `modern-nav-link text-decoration-none ${isActive ? 'active-link' : ''}`}>
                                    Sobre mí
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/portfolio" className={({ isActive }) => `modern-nav-link text-decoration-none ${isActive ? 'active-link' : ''}`}>
                                    Portfolio
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/contact" className={({ isActive }) => `modern-nav-link text-decoration-none ${isActive ? 'active-link' : ''}`}>
                                    Contacto
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* BOTÓN HAMBURGUESA (Solo para móviles) */}
                    <div className='d-flex d-md-none align-items-center'>
                        <button className='menu-button nav-ac' onClick={handleToggle}>
                            {!isActive ? <VscGrabber /> : <VscClose />}
                        </button>
                    </div>
                </div>

                {/* MENÚ DESPLEGABLE A PANTALLA COMPLETA (Móviles) */}
                <div className={`site-navigation ${isActive ? 'menu-opend' : ""}`}>
                    <div className='bg-menu h-100'>
                        <div className='menu-wrapper'>
                            <div className='menu-container p-3'>
                                <ul className='the-menu'>    
                                    <li className='menu-item'>
                                        <Link onClick={handleToggle} to="/" className='my-3 text-decoration-none'>Inicio</Link>
                                    </li>
                                    <li className='menu-item'>
                                        <Link onClick={handleToggle} to="/about" className='my-3 text-decoration-none'>Sobre mí</Link>
                                    </li>
                                    <li className='menu-item'>
                                        <Link onClick={handleToggle} to="/portfolio" className='my-3 text-decoration-none'>Portfolio</Link>
                                    </li>
                                    <li className='menu-item'>
                                        <Link onClick={handleToggle} to="/contact" className='my-3 text-decoration-none'>Contacto</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='menu-footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3'>
                        <div className='d-flex' style={{ gap: '15px' }}>
                            <a href={socialProfiles.linkedin} target='_blank' rel="noopener noreferrer">Linkedin</a>
                            <a href={socialProfiles.github} target='_blank' rel="noopener noreferrer">GitHub</a>
                            <a href={socialProfiles.twitter} target='_blank' rel="noopener noreferrer">Twitter</a>
                        </div>
                        <p className='copyright m-0'>🖥️ {LOGOTEXT}</p>
                    </div>
                </div>
            </header>

            {/* Bordes decorativos */}
            <div className='br-top'></div>
            <div className='br-bottom'></div>
            <div className='br-left'></div>
            <div className='br-right'></div>
        </>
    );
}

export default Header;
