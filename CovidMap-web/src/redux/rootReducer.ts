import { combineReducers } from 'redux'

import dataReducer from './data/dataReducer'

const rootReducer = combineReducers({
    data: dataReducer
})

export default rootReducer
