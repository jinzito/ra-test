import { SET_SORT_FILTER, SET_VISIBILITY_FILTER, SortFilter, VisibilityFilters } from "../actions";

const callItemsFilter = (state = {filter: VisibilityFilters.SHOW_ALL, sort: SortFilter.CALL_TIME, descending: true}, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return {...state, filter: action.filter};
        case SET_SORT_FILTER:
            if (state.sort === action.sortType) {
                const newDescending = !state.descending;
                return {...state, descending: newDescending};
            } else {
                return {...state, sort: action.sortType};
            }
        default:
            return state;
    }
}

export default callItemsFilter;
