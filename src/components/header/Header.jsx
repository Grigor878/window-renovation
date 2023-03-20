import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <Link to='/'>
                        <h2>Logo</h2>
                    </Link>
                    <ul className='header__nav-list'>
                        <li>
                            <NavLink to='/' className="header__nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/summary' className="header__nav-link">
                                Summary
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header