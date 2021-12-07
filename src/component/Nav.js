import React from 'react';

const Nav = () => {
    return (
        <div className="container pt-4">
            <div className="shadow p-2 bg-body rounded">
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted fw-bold" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ALL TYPES</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">All Types</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">E-sport Logo</a></li>
                                    <li><a className="dropdown-item" href="#!">Brand Logo</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar d-flex justify-content-center">
                        <div>
                            <a className="btn text-muted fw-bold active" aria-hidden="true" href="#!">Popular Designs</a>
                        </div>
                        <div>
                            <a className="btn text-muted fw-bold" href="#!">Low Price</a>
                        </div>
                        <div>
                            <a className="btn text-muted fw-bold" href="#!">High Price</a>
                        </div>
                    </div>
                    <div className="me-3">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted fw-bold" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PRICE</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">All Designs</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Low Price</a></li>
                                    <li><a className="dropdown-item" href="#!">High Price</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;