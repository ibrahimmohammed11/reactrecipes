import React, { Fragment } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import Styles from "./style.module.css";

function Navbar() {
    let { pathname } = useLocation();
    function logout() {
        localStorage.clear();
    }
    let token = localStorage.getItem("token");
    let decoded = {};
    try {
        decoded = jwt_decode(token);
    } catch (error) {
        localStorage.clear();
    }
    const isActive = {
        fontWeight: "bold",
        backgroundColor: "#fff",
        color: " #09c",
        borderRadius: "2px"
    };
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
                <NavLink className="navbar-brand" to="/home">Yummy</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home" activeStyle={isActive}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pasta" activeStyle={isActive}>Pasta</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pizza" activeStyle={isActive}>Pizza</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/kebab" activeStyle={isActive}>Kebab</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/icecream" activeStyle={isActive}>IceCream</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/croissant" activeStyle={isActive}>Croissant</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cake" activeStyle={isActive}>Cake</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/ibrahim-mohammed-306134209/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in nav-link fa-lg mr-2 mt-1 icon"></i></a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/ibrahimmohammed11" target="_blank" rel="noreferrer"><i className="fab fa-github nav-link fa-lg mr-2 mt-1 icon"></i></a>
                        </li>
                        <li className="nav-item">
                            <i className="fab fa-dribbble nav-link fa-lg mr-3 mt-1 icon"></i>
                        </li>
                    </ul>
                    {pathname !== '/home' && pathname !== '/pizza' && pathname !== '/pasta' && pathname !== '/kebab' && pathname !== '/icecream' && pathname !== '/croissant' && pathname !== '/cake' && !pathname.includes("recipedetails")
                        ? <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                        </ul>
                        : <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink onClick={logout} to="/login" className={`text-white nav-link`} activeStyle={isActive}>Log out</NavLink>
                            </li>
                            <li className="nav-item">
                                <span className={`${Styles.nameSt} nav-link`}>
                                    Welcome {decoded?.first_name} {decoded?.last_name}
                                </span>
                            </li>
                        </ul>}
                </div>
            </nav>
        </Fragment>
    )
}
export default Navbar;