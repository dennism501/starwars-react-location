import React from 'react'

const Header: React.FC = () => {
    return (
        <div>
            <nav className="navbar is-transparent">
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
                            Planets
                        </span>
                        <span className="navbar-item">
                            species
                        </span>
                        <span className="navbar-item">
                            Characters
                        </span>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <span className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                    <span>
                                        Tweet
                                    </span>

                                </p>
                                <p className="control">
                                    <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
                                        <span className="icon">
                                            <i className="fas fa-download"></i>
                                        </span>
                                        <span>Download</span>
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