import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import reducers from '../business/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

export default function configureStore (initialState) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )
}
