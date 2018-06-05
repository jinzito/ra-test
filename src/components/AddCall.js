import React, { Component } from "react";
import Pod from "./Pod";
import { connect } from 'react-redux'
import { addTodo } from '../actions'


class AddCall extends Component {

    constructor() {
        super();
        // this.state.validToAdd = false;
        this.name = React.createRef();
        this.phone = React.createRef();
        this.time = React.createRef();
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeInput() {
        console.log("onChangeInput")
    }

    onSubmit(event) {
        event.preventDefault();
        console.log("onSubmit");
        // if (!name.value.trim() || !phone.value.trim() || !time.value.trim()) {
        //     return
        // }
        // dispatch(addTodo(name.value))
        // name.value = '';
        // phone.value = '';
        // time.value = '';
        this.props.onPageSizeChange(event.target.value);
    }

    render() {
        return (
            <Pod title="Add Call">
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <input className="form-control" placeholder="Name" ref={this.name}
                                   onChange={this.onChangeInput}/>
                        </div>
                        <div className="form-group col-md-4">
                            <input className="form-control" placeholder="Phone" ref={this.phone}/>
                        </div>
                        <div className="form-group col-md-4">
                            <input className="form-control" placeholder="Time" ref={this.time}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Add</button>
                </form>
            </Pod>
        )
    }

}

const mapStateToProps = state => {
    return {
        validToAdd: state.validToAdd
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPageSizeChange: (callItemVO) => {
            dispatch(addTodo(callItemVO))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCall)