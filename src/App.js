import React, {Component} from 'react';
import './App.css';
import AddCall from "./components/AddCall";
import CallsList from "./components/CallsList";
import NextCall from "./components/NextCall";

class App extends Component {
    render() {
        return (

            <div className="row top-xs">
                <div className="col-xs-6">
                    <NextCall/>
                </div>
                <div className="col-xs-6">
                    <AddCall/>
                    <CallsList/>
                </div>
            </div>
        )
    };
}

export default App;