import React, { Component} from "react";
import { Router, Switch, Route } from "react-router-dom";
import DonationsForm from "./DonationsForm";
import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                
                    <Route path="/Donate" exact component={DonationsForm} />
                </Switch>
            </Router>
        )
    }
}