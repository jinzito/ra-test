import React, {Component} from "react";
import Pod from "./Pod";

class AddCall extends Component {
    render() {
        return (
            <Pod title="Add Call">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <input className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group col-md-4">
                            <input className="form-control" placeholder="Phone"/>
                        </div>
                        <div className="form-group col-md-4">
                            <input className="form-control" placeholder="Time"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Add</button>
                </form>
            </Pod>
        )
    }
}

export default AddCall;
