import { combineReducers } from 'redux'
import TodoReducer from '../Dashboard/reducer'

export default combineReducers({
  mainMenu: (state, action) => ({ ...state }),
  todos: TodoReducer
})
