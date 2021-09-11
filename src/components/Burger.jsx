import React from 'react';

class Burger extends React.Component {
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    };
    render() {
        const { name, image, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';
        return (
            <li className="menu-burger">
                <div className="image-container">
                    <img src={image} alt="" />
                </div>
                <div className="burger-details">
                    <h3 className="burger-name">
                        {name}
                        <span className="price">{price} ₽</span>
                    </h3>
                    <p>{desc}</p>
                    <button
                        onClick={this.handleClick}
                        className="buttonOrder"
                        disabled={!isAvailable}>
                        Заказать
                    </button>
                </div>
            </li>
        );
    }
}

export default Burger;
