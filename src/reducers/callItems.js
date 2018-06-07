import { ADD_CALL_ITEM, DELETE_CALL_ITEM } from "../actions";

const callItems = (state = [], action) => {
    switch (action.type) {
        case ADD_CALL_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    ...action.callItem
                }
            ]
        case DELETE_CALL_ITEM:
            return state.map(item =>
                (item.id === action.id)
                    ? {...item, completed: !item.completed}
                    : item
            )
        default:
            return state
    }
}

export default callItems;