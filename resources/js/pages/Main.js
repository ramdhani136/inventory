import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import store from "../app/store";
import { Footer, Header, Sidebar } from "../components";
import { CreateAsset, Home, Listasset, ViewAsset } from "./index";
import "./main.scss";

function Main() {
    const About = () => {
        const { kode } = useParams();
        return <div>{kode}</div>;
    };

    const Users = () => {
        return <div>Users</div>;
    };

    return (
        <div>
            {/* <Router basename={'/inventory/public'}> */}
            <Router>
                <Provider store={store}>
                    <Header />
                    <Sidebar />
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/asset" component={Listasset} />
                        <Route path="/form/asset" component={CreateAsset} />
                        <Route path="/view/asset/:kode" component={ViewAsset} />
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
