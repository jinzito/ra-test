import React, { Component } from "react";
import Pod from "./Pod";
import { connect } from "react-redux"
import { deleteCallItem } from "../actions"
import CallsListItem from "./CallsListItem";

class CallsList extends Component {

    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(event) {
        console.log("onDelete");
    }

    render() {
        const thArray = ["Name", "Phone number", "Time"];

        return (
            <Pod>
                <div className="btn-toolbar d-flex justify-content-between my-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text" id="btnGroupAddon">search</div>
                        </div>
                        <input type="text" className="form-control" placeholder=""
                               aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                    </div>

                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-outline-secondary active">
                            <input type="radio" name="options" id="option1"/>All
                        </label>
                        <label className="btn btn-outline-secondary">
                            <input type="radio" name="options" id="option2"/> Next
                        </label>
                        <label className="btn btn-outline-secondary">
                            <input type="radio" name="options" id="option2"/> Finished
                        </label>
                    </div>
                </div>

                <table className="table-sm table-hover table-striped w-100">
                    <thead>
                    <tr>
                        {thArray.map((prop, key) => {
                            return (
                                <th className="c-pointer" key={key} scope="col" role="button">
                                    <p>{prop}
                                        <i className="down mx-2 mt-1 float-right"></i>
                                    </p>
                                </th>
                            );
                        })}
                    </tr>
                    </thead>
                    <tbody className="table-striped">
                    {this.props.callItems.map((prop, key) => {
                        return (
                            <CallsListItem onDelete={this.onDelete} key={key} callItemVO={prop}/>
                        );
                    })}
                    </tbody>
                </table>
            </Pod>
        )
    }
}

const getVisibleItems = (callItems, filter) => {
    return callItems;
    /*
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
    */
}

const mapStateToProps = state => ({
    callItems: getVisibleItems(state.callItems, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    deleteCallItem: id => dispatch(deleteCallItem(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CallsList)