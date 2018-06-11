import React from "react";
import PropTypes from "prop-types";
import { VisibilityFilters } from "../actions"

const CallsFilter = ({onChangeFilter, currentFilter}) => {
    const getActive = (filter) => {
        return currentFilter === filter ? " active" : "";
    }
    const onClick = (event) => {
        onChangeFilter(event.target.getAttribute("filterName"))
    }
    return (
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label filtername={VisibilityFilters.SHOW_ALL}
                   className={"btn btn-outline-secondary" + getActive(VisibilityFilters.SHOW_ALL)} onClick={onClick}>
                All
            </label>
            <label filtername={VisibilityFilters.SHOW_ACTIVE}
                   className={"btn btn-outline-secondary" + getActive(VisibilityFilters.SHOW_ACTIVE)} onClick={onClick}>
                Next
            </label>
            <label filtername={VisibilityFilters.SHOW_COMPLETED}
                   className={"btn btn-outline-secondary" + getActive(VisibilityFilters.SHOW_COMPLETED)}
                   onClick={onClick}>
                Finished
            </label>
        </div>
    )
}

CallsFilter.propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
    currentFilter: PropTypes.string.isRequired
};

export default CallsFilter;