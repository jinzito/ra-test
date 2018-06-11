import { combineReducers } from "redux"
import callItems from "./callItems"
import callItemsFilter from "./callItemsFilter"

const raTestReducers = combineReducers({
    callItems,
    callItemsFilter
});

export default raTestReducers