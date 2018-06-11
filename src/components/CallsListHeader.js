import React from "react";
import PropTypes from "prop-types";
import { SortFilter } from "../actions";

const CallsListHeader = ({onChangeSort, currentSort, sortDescending}) => {

    const headerItems = [
        {title: "Name", sortType: SortFilter.CALL_NAME},
        {title: "Phone number", sortType: SortFilter.CALL_NUMBER},
        {title: "Time", sortType: SortFilter.CALL_TIME}
    ];

    const getIcon = () => {
        return sortDescending ? "up" : "down";
    }

    const getVisibility = (type) => {
        return {opacity: type === currentSort ? 1 : 0.001};
    }

    return (
        <thead>
        <tr>
            {headerItems.map((headerItem, key) => {
                return (
                    <th className="c-pointer" key={key} scope="col" role="button"
                        onClick={() => onChangeSort(headerItem.sortType)}>
                        <p>{headerItem.title}
                            <i className={getIcon() + " mx-2 mt-1 float-right"}
                               style={getVisibility(headerItem.sortType)}
                            />
                        </p>
                    </th>
                );
            })}
        </tr>
        </thead>
    );

}

CallsListHeader.propTypes = {
    onChangeSort: PropTypes.func.isRequired,
    currentSort: PropTypes.string.isRequired
};

export default CallsListHeader;