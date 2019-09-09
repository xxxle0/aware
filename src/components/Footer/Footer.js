import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return(
            <div className="Footer">
                <div className="Footer--left">
                    <img src="/logo.png" alt="logo"/>
                </div>
                <div className="Footer--center">
                   <ul className="Footer__menu"> 
                       <li className="Footer__menu-item">Home</li>
                       <li className="Footer__menu-item">Products</li>
                       <li className="Footer__menu-item">Services</li>
                       <li className="Footer__menu-item">About us</li>
                       <li className="Footer__menu-item">Help</li>
                       <li className="Footer__menu-item">Contacts</li>    
                   </ul>
                </div>
                <div className="Footer--right">
                    <ul className="Footer__social">
                       <li className="Footer__social-item">twitter</li>
                       <li className="Footer__social-item">facebook</li>
                       <li className="Footer__social-item">instagram</li>   
                   </ul>
                </div>
            </div>
        )
    }
}

export default Footer;