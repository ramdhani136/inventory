import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "../app/store";
import { Footer, Header, Sidebar } from "../components";
import { CreateAsset, Home, Listasset } from "./index";
import "./main.scss";

function Main() {
    const About = () => {
        return <div>About</div>;
    };

    const Users = () => {
        return <div>Users</div>;
    };

    return (
        <div>
            <Router>
                <Provider store={store}>
                    <Header />
                    <Sidebar />
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/asset" component={Listasset} />
                        <Route path="/form/asset" component={CreateAsset} />
                        <Route path="/users" component={Users} />
                    </Switch>
                    <Footer />
                </Provider>
            </Router>
        </div>
    );
}

export default Main;

if (document.getElementById("app")) {
    ReactDOM.render(<Main />, document.getElementById("app"));
}
