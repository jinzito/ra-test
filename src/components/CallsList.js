import React, { Component } from "react";
import Pod from "./Pod";
import { connect } from "react-redux"
import { deleteCallItem, setVisibilityFilter, VisibilityFilters } from "../actions"
import CallsListItem from "./CallsListItem";
import CallsFilter from "./CallsFilter";

class CallsList extends Component {

    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    onDelete(idToDelete) {
        this.props.deleteCallItem(idToDelete)
    }

    onChangeFilter(filter) {
        this.props.setVisibilityFilter(filter);
    }

    render() {
        const thArray = ["Name", "Phone number", "Time"];

        return (
            <Pod>
                <div className="btn-toolbar d-flex justify-content-between my-4 w-100">
                    <CallsFilter className="float-right" onChangeFilter={this.onChangeFilter}
                                 currentFilter={this.props.callItemsFilter.filter}/>
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
                            <CallsListItem onDelete={this.onDelete} key={key} item={prop}/>
                        );
                    })}
                    </tbody>
                </table>
            </Pod>
        )
    }
}

const getVisibleItems = (callItems, filter) => {
    const currentTime = new Date();
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return callItems;
        case VisibilityFilters.SHOW_COMPLETED:
            return callItems.filter(t => new Date(t.time) < currentTime)
        case VisibilityFilters.SHOW_ACTIVE:
            return callItems.filter(t => new Date(t.time) >= currentTime)
        default:
            throw new Error("Unknown filter: " + filter)
    }
}

const mapStateToProps = state => ({
    callItems: getVisibleItems(state.callItems, state.callItemsFilter.filter),
    callItemsFilter: state.callItemsFilter
});

const mapDispatchToProps = dispatch => ({
    deleteCallItem: id => dispatch(deleteCallItem(id)),
    setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CallsList)