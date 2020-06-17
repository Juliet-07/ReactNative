import {createStore, combineReducers} from 'redux' 
import placesReducer from './rootReducer'

const rootReducer = combineReducers({
    places:placesReducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore 