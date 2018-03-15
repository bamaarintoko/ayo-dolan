import { combineReducers } from 'redux'
import {nav} from './dataReducers'

import {redGetUserId,rehydrated,redAuthCredential} from './userReducers'
import {redGetDataPeople} from './homeReducers'

const rootReducer = combineReducers({
    nav:nav,
    redGetUserId:redGetUserId,
    redGetDataPeople:redGetDataPeople,
    rehydrated:rehydrated,
    redAuthCredential:redAuthCredential,
})

export default rootReducer