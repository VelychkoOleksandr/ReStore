import React from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage, CartPage } from "../pages";

import './app.css';
import ShopHeader from "../header/header";

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
        <Switch>
            <Route path="/" 
                   component={HomePage} 
                   exact />

            <Route path="/cart" 
                   component={CartPage} 
                   exact />
        </Switch>
        </main>
    );
}

export default App;