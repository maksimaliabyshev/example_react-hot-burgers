import React from 'react';
import Header from './components/Header';
import Order from './components/Order';
import MenuAdmin from './components/MenuAdmin';

class App extends React.Component {
    render() {
        return (
            <div className="burger-paradise">
                <div className="menu">
                    <Header title="very hot burger" />
                </div>
                <Order />
                <MenuAdmin />
            </div>
        );
    }
}

export default App;
