import React from 'react';
import Header from './components/Header';
import Order from './components/Order';
import MenuAdmin from './components/MenuAdmin';
import Burger from './components/Burger';
import sampleBurgers from './sample-burgers';
import base from './base';

class App extends React.Component {
    state = {
        burgers: {},
        order: {},
    };

    componentDidMount() {
        const { params } = this.props.match;

        const localStorageRef = localStorage.getItem(params.restaurantId);
        if (localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef),
            });
        }
        this.ref = base.syncState(`${params.restaurantId}/burgers`, {
            context: this,
            state: 'burgers',
        });
    }
    componentDidUpdate(prevProps, prevState) {
        const { params } = this.props.match;
        localStorage.setItem(
            params.restaurantId,
            JSON.stringify(this.state.order),
        );
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addBurger = (burger) => {
        const burgers = { ...this.state.burgers };
        burgers[`burger${Date.now()}`] = burger;
        this.setState({ burgers });
    };
    updateBurger = (key, updatedBurger) => {
        const burgers = { ...this.state.burgers };
        burgers[key] = updatedBurger;
        this.setState({ burgers });
    };
    deleteBurger = (key) => {
        const burgers = { ...this.state.burgers };
        burgers[key] = null;
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
    deleteFromOrder = (key) => {
        const order = { ...this.state.order };
        delete order[key];
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
                <Order
                    burgers={this.state.burgers}
                    order={this.state.order}
                    deleteFromOrder={this.deleteFromOrder}
                />
                <MenuAdmin
                    addBurger={this.addBurger}
                    loadSamleBurgers={this.loadSamleBurgers}
                    burgers={this.state.burgers}
                    updateBurger={this.updateBurger}
                    deleteBurger={this.deleteBurger}
                />
            </div>
        );
    }
}

export default App;
