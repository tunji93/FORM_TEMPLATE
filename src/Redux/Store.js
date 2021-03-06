import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './Reducer'





const rootReducer = combineReducers({
    initialState: reducer
})

    



const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store