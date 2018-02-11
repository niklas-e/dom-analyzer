import { combineReducers } from 'redux'
import analysis from '~/modules/analysis'

const makeRootReducer = () => {
    const appReducer = combineReducers({
        analysis
    })

    const rootReducer = (state, action) => {
        return appReducer(state, action)
    }

    return rootReducer
}

export default makeRootReducer()