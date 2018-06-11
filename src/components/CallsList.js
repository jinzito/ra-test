import React, { Component } from "react";
import Pod from "./Pod";
import { connect } from "react-redux"
import { deleteCallItem, setSortFilter, setVisibilityFilter, SortFilter, VisibilityFilters } from "../actions"
import CallsListItem from "./CallsListItem";
import CallsFilter from "./CallsFilter";
import CallsListHeader from "./CallsListHeader";

class CallsList extends Component {

    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);
        this.onChangeSorting = this.onChangeSorting.bind(this);
    }

    onDelete(idToDelete) {
        this.props.deleteCallItem(idToDelete)
    }

    onChangeFilter(filter) {
        this.props.setVisibilityFilter(filter);
    }

    onChangeSorting(sortField) {
        this.props.setSortFilter(sortField);
    }

    render() {

        return (
            <Pod>
                <div className="btn-toolbar d-flex justify-content-between my-4 w-100">
                    <CallsFilter className="float-right" onChangeFilter={this.onChangeFilter}
                                 currentFilter={this.props.callItemsFilter.filter}/>
                </div>

                <table className="table-sm table-hover table-striped w-100">

                    <CallsListHeader
                        onChangeSort={this.onChangeSorting}
                        currentSort={this.props.callItemsFilter.sort}
                        sortDescending={this.props.callItemsFilter.descending}/>

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

const getSortedItems = (callItems, sorting) => {
    const sortField = sorting.sort;
    const sortAccordingDescending = (a, b) => {
        return sorting.descending ? a > b : a < b;
    }
    const sortFunction = (a, b) => {
        switch (sortField) {
            case SortFilter.CALL_NAME:
                return sortAccordingDescending(a.name, b.name);
            case SortFilter.CALL_TIME:
                return sortAccordingDescending(new Date(a.time), new Date(b.time));
            case SortFilter.CALL_NUMBER:
                return sortAccordingDescending(a.phone, b.phone);
            default:
                throw new Error("Unexpected sort field");
        }
    };
    return callItems.sort(sortFunction);
};

const mapStateToProps = state => ({
    callItems: getSortedItems(getVisibleItems(state.callItems, state.callItemsFilter.filter), state.callItemsFilter),
    callItemsFilter: state.callItemsFilter
});

const mapDispatchToProps = dispatch => ({
    deleteCallItem: id => dispatch(deleteCallItem(id)),
    setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
    setSortFilter: sortField => dispatch(setSortFilter(sortField))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CallsList)