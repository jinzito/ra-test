import React, {Component} from 'react';
import './App.css';
import AddCall from "./components/AddCall";
import TableList from "./components/TableList";
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
                    <TableList/>
                </div>
            </div>
        )
    };
}

export default App;