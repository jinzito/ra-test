import React, { Component } from "react";
import Pod from "./Pod";
import { connect } from "react-redux";
import { addCallItem } from "../actions";
import PhoneInput from "./PhoneInput";
import MaskedInput from "react-text-mask";

class AddCall extends Component {

    constructor() {
        super();
        this.state = {callName: "", callNumber: "", callTime: ""};
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validToAdd = this.validToAdd.bind(this);
    }

    onChangeInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    validToAdd() {
        const notEmpty = (value) => !!(value && value.trim().length > 0);
        return notEmpty(this.state.callName) && notEmpty(this.state.callNumber) && notEmpty(this.state.callTime);
    }

    onSubmit(event) {
        event.preventDefault();
        if (!this.validToAdd()) {
            return;
        }
        const state = this.state;

        const time = state.callTime.split(":");
        const date = new Date();
        const rawHours = parseInt(time[0], 10);
        date.setHours(rawHours > 0 ? rawHours : 0);
        const rawMinutes = time.length > 0 ? parseInt(time[1], 10) : 0;
        date.setMinutes(rawMinutes > 0 &&  rawMinutes < 60 ? rawMinutes : 0);
        this.props.addCallItem({name: state.callName, phone: state.callNumber, time: date.toString()});
        this.setState({callName: "", callNumber: "", callTime: ""});
    }

    render() {
        return (
            <Pod title="Add Call">
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <input
                                name="callName"
                                className="form-control"
                                placeholder="Enter person name"
                                onChange={this.onChangeInput}
                                value={this.state.callName}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <PhoneInput
                                name="callNumber"
                                className="form-control"
                                placeholder="Enter phone number"
                                guide={false}
                                onChange={this.onChangeInput}
                                value={this.state.callNumber}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <MaskedInput 
                                name="callTime"
                                className="form-control"
                                placeholder="Enter time"
                                onChange={this.onChangeInput}
                                value={this.state.callTime}
                                guide={false}
                                mask={[/[0-2]/, /[0-9]/, ":", /[0-6]/, /[0-9]/]}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary float-right"
                            disabled={!this.validToAdd()}>Add
                    </button>
                </form>
            </Pod>
        )
    }
}

const mapStateToProps = state => {
    return {
        validToAdd: state.validToAdd,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addCallItem: (callItemVO) => {
            dispatch(addCallItem(callItemVO))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCall)