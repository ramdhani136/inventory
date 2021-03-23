import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Header, Sidebar } from "../components";
import { Home } from "./index";
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
                <Header />
                <Sidebar/>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/about" component={About} />
                    <Route path="/users" component={Users} />
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default Main;

if (document.getElementById("app")) {
    ReactDOM.render(<Main />, document.getElementById("app"));
}
