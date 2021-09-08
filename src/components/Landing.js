import React from 'react';
import restaurants from '../sample-restaurants';

class Landing extends React.Component {
    state = {
        display: false,
        title: '',
        url: '',
    };

    displayList = () => {
        console.log('click');
        console.log(this);
    };

    render() {
        restaurants.map((restaurant) => console.log(restaurant));

        return (
            <div>
                <div className="restaurant_select">
                    <div className="restaurant_select_top">
                        <div
                            onClick={this.displayList}
                            className="restaurant_select_top-header font-effect-outline">
                            Выберите ресторан
                        </div>

                        <div className="arrow_picker">
                            <div className="arrow_picker-up"></div>
                            <div className="arrow_picker-down"></div>
                        </div>
                    </div>

                    <div className="restaurant_select_bottom">
                        <ul>
                            {restaurants.map((restaurant) => {
                                return (
                                    <li key={restaurant.id}>
                                        {restaurant.title}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <button className="">Перейти в ресторан</button>
                </div>
            </div>
        );
    }
}

export default Landing;
