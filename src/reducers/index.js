import { combineReducers } from 'redux'
import {nav} from './dataReducers'

import {redGetUserId,rehydrated} from './userReducers'
import {redGetDataPeople} from './homeReducers'

const rootReducer = combineReducers({
    nav:nav,
    redGetUserId:redGetUserId,
    redGetDataPeople:redGetDataPeople,
    rehydrated:rehydrated,
})

export default rootReducer