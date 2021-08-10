import React,{useState, useEffect} from 'react';
import "./Nav.css";
import {Link} from "react-router-dom";
import Logo from "../../Images/Logo.png";
import Avatar from "../../Images/Avatar.png"

const Nav = () => {

    const[show, setShow]= useState(false);

    const NavBarVisibility = () => {
        if(window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", NavBarVisibility);

        return()=>{
            window.removeEventListener("scroll", NavBarVisibility)
        }
    }, [])

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <Link to="/">
                <img src={Logo} className="nav-logo" alt="logo"/>
            </Link>
                
            <img src={Avatar} className="nav-avatar" alt="avatar"/>      
        </div>
    )
}

export default Nav
