import React from 'react';
import './Menu.scss';

export default class Menu extends React.Component { 
    render() {
        return (
            <div className="Menu">
                <ul className="Menu__list">
                    <li className="Menu__list-item">Men</li>
                    <li className="Menu__list-item">Ladies</li>
                    <li className="Menu__list-item">Girls</li>
                    <li className="Menu__list-item">Boys</li>
                </ul>
            </div>
        );
    }
}