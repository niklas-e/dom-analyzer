import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import ReduxThunk from 'redux-thunk'

const middleware = [
    ReduxThunk
]

const initStore = () => {
    return createStore(rootReducer, applyMiddleware(...middleware))
}

export default initStore