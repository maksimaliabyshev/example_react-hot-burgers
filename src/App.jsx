import React from 'react';
import Header from './components/Header';
import Order from './components/Order';
import MenuAdmin from './components/MenuAdmin';
import Burger from './components/Burger';
import sampleBurgers from './sample-burgers';

class App extends React.Component {
    state = {
        burgers: {},
        order: {},
    };

    addBurger = (burger) => {
        console.log(burger);
        const burgers = { ...this.state.burgers };
        burgers[`burger${Date.now()}`] = burger;
        this.setState({ burgers });
    };

    loadSamleBurgers = () => {
        this.setState({ burgers: sampleBurgers });
    };
    addToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    };
    render() {
        return (
            <div className="burger-paradise">
                <div className="menu">
                    <Header title="very hot burger" />
                    <ul className="burgers">
                        {Object.keys(this.state.burgers).map((key) => {
                            return (
                                <Burger
                                    key={key}
                                    index={key}
                                    details={this.state.burgers[key]}
                                    addToOrder={this.addToOrder}
                                />
                            );
                        })}
                    </ul>
                </div>
                <Order burgers={this.state.burgers} order={this.state.order} />
                <MenuAdmin
                    addBurger={this.addBurger}
                    loadSamleBurgers={this.loadSamleBurgers}
                />
            </div>
        );
    }
}

export default App;
