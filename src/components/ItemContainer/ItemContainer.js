import React from 'react';
import './ItemContainer.scss';

class ItemContainer extends React.Component {
    render() {
        return (
            <div className="item-container">
                <div className="item--top">
                    <img className="item--top__image" src="/item.jpg" alt="image-top"/>
                </div>
                <div className="item__list--bottom" />
                    <div className="item__child--bottom">
                        <img className="item--top__image" src="/item.jpg" alt="image-bottom"/>
                    </div>
                    <div className="item__child--bottom">
                        <img className="item--top__image" src="/item.jpg" alt="image-bottom"/>
                    </div>
                    <div className="item__child--bottom">
                        <img className="item--top__image" src="/item.jpg" alt="image-bottom"/>
                    </div>
                    <div className="item__child--bottom">
                        <img className="item--top__image" src="/item.jpg" alt="image-bottom"/>
                    </div>
                <div>   
                </div>
            </div>
        )
    }
}

export default ItemContainer;