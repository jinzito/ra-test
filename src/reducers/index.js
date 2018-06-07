import { combineReducers } from 'redux'
import callItems from './callItems'
import visibilityFilter from './visibilityFilter'

const raTestReducers = combineReducers({
    callItems,
    visibilityFilter
});

export default raTestReducers