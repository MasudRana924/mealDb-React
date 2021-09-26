import React from 'react';
import logo from '../Images/logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div className="image">
               <h1>Fast Delivery</h1>
            </div>
            <div className="button">
           <button className="login">Login</button> <button className="signup">SignUp</button>
            </div>

        </div>
    );
};

export default Header;