import { combineReducers } from 'redux'
import ActionReducer from '../views/Action/store/reducer.js'
import HomeReducer from '../views/Home/store/reducer.js'
import MyReducer from '../views/My/store/reducer.js'
import TourReducer from '../views/Tour/store/reducer.js'
import Info from '../views/TourShowinfo/store/reducer.js'
import Ticket from '../views/Ticket/store/reducer.js'
import Price from '../views/price/store/reducer.js'

import HeaderReducer from '../components/Header/store/reducer.js'
import LocationReducer from '../views/Location/store/reducer.js'
let totalReducer = combineReducers({
  Home: HomeReducer,
  Action: ActionReducer,
  My:MyReducer,
  Tour:TourReducer,
  Info,
  Ticket,
  Price,
  Header:HeaderReducer,
  Location:LocationReducer
})
// console.log(totalReducer)
export default totalReducer
