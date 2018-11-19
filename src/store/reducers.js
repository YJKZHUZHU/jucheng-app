import { combineReducers } from 'redux'
import ActionReducer from '../views/Action/store/reducer.js'
import HomeReducer from '../views/Home/store/reducer.js'
import MyReducer from '../views/My/store/reducer.js'
import TourReducer from '../views/Tour/store/reducer.js'
let totalReducer = combineReducers({
  Home: HomeReducer,
  Action: ActionReducer,
  My:MyReducer,
  Tour:TourReducer
})
console.log(totalReducer)
export default totalReducer
