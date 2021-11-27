import React from 'react'
import { Link } from 'react-location'

const Header: React.FC = () => {
    return (
        <div>
            <nav className="navbar is-transparent m-3">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                    </a>
                    <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <span className="navbar-item">
                            Home
                        </span>
                        <span className="navbar-item">
                            <Link to="/planets"> Planets</Link>
                        </span>
                        <span className="navbar-item">
                            Species
                        </span>
                        <span className="navbar-item">
                            Characters
                        </span>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-primary" href="https://github.com/dennism501/starwars-react-location">
                                        <span className="icon">
                                            <i className="fas fa-github"></i>
                                        </span>
                                        <span>Github</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;