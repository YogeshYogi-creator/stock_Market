import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import companyDetails from '../reducer/companyDetails'
const configureStore = () => {
    const store = createStore(combineReducers({
        company: companyDetails
    }), applyMiddleware(thunk))
    return store
}
export default configureStore