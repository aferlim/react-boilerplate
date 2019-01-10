import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { multiClientMiddleware } from 'redux-axios-middleware'

import history from './history'
import reducer from './rootReducer'
import client from './client'

const initialState = {}

const createStoreWithMiddlewares = compose(
  applyMiddleware(routerMiddleware(history), multiClientMiddleware(client))
)(createStore)

const reducerWithRouter = connectRouter(history)(reducer)

const reduxWithPersist = persistReducer(
  { key: 'root', storage },
  reducerWithRouter
)

const store = createStoreWithMiddlewares(
  reduxWithPersist,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const persistor = persistStore(store)

export { store, history, persistor }
