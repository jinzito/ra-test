import { SET_SORT_FILTER, SET_VISIBILITY_FILTER, SortFilter, VisibilityFilters } from "../actions";

const callItemsFilter = (state = {visible: VisibilityFilters.SHOW_ALL, sort: SortFilter.CALL_TIME}, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return {...state, filter: action.filter};
        case SET_SORT_FILTER:
            return {...state, sort: action.sort};
        default:
            return state;
    }
}

export default callItemsFilter;
