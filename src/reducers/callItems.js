import { ADD_CALL_ITEM, DELETE_CALL_ITEM } from "../actions";

const callItems = (state = [], action) => {
    switch (action.type) {
        case ADD_CALL_ITEM:
            const maxIndex = state.length > 0 ? state.map(i => i.id).sort().pop() : 0;
            return [
                ...state,
                {
                    id: maxIndex + 1,
                    ...action.callItem
                }
            ]
        case DELETE_CALL_ITEM:
            const idToDelete = action.id;
            return state.filter(i => i.id !== idToDelete);
        default:
            return state;
    }
}

export default callItems;