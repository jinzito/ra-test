let nextCallId = 0;

export const ADD_CALL_ITEM = 'ADD_CALL_ITEM';
export const addCallItem = callItem => ({
    type: ADD_CALL_ITEM,
    id: nextCallId++,
    callItem
});

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const DELETE_CALL_ITEM = 'DELETE_CALL_ITEM';
export const deleteCallItem = id => ({
    type: DELETE_CALL_ITEM,
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const SortFilter = {
    CALL_NAME: "CALL_NAME",
    CALL_NUMBER: "CALL_NUMBER",
    CALL_TIME: "CALL_TIME"
};