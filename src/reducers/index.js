import { combineReducers } from 'redux'
import {nav} from './dataReducers'

import {redGetUserId} from './userReducers'
import {redGetDataPeople} from './homeReducers'

const rootReducer = combineReducers({
    nav:nav,
    redGetUserId:redGetUserId,
    redGetDataPeople:redGetDataPeople,
})

export default rootReducer