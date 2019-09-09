import React from 'react';
import './Header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__container">
                    <div className="Header--left">
                        <div className="Header__search">
                            <input placeholder="Search"/> Search
                        </div>
                    </div>
                    <div className="Header--center">
                        <div className="Header__logo">
                            <img src="/logo.png" alt="logo"/>
                        </div>
                    </div>
                    <div className="Header--right">
                        <div className="Header__register">
                            <button className="Header__register-btn">Register</button>
                        </div>
                        <div className="Header__login">
                            <button className="Header__login-btn">Log in</button>
                        </div>
                        <div className="Header__cart">
                            <button className="Header__cart-btn">Cart</button> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}