import { combineReducers } from 'redux'
 
const rootReducer = combineReducers({
  gameParams: require('./GameplayReducer').default
})

export default rootReducer;