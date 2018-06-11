import React, { Component } from "react";
import { connect } from "react-redux";
import { getFormattedTime } from "./../utils";

class NextCall extends Component {
    render() {
        return (
            <div className="jumbotron mx-4 my-4">
                <h1 className="display-5">Next Call</h1>
                <p className="lead">
                    {this.props.nextCall ? this.props.nextCall.name : "No Calls"}
                </p>
                <p>
                    {this.props.nextCall ? this.props.nextCall.phone : "please relax"}
                </p>
                <p>
                    {this.props.nextCall ? getFormattedTime(this.props.nextCall.time) : null}
                </p>
            </div>
        )
    }
}

const getNextItem = (items) => {
    const currentTime = new Date();
    return items.filter(i => new Date(i.time) > currentTime).sort((a, b) => new Date(a.time) < new Date(b.time)).pop();
};

const mapStateToProps = state => ({
    nextCall: getNextItem(state.callItems)
});

export default connect(
    mapStateToProps,
    {}
)(NextCall)