import { combineReducers } from 'redux'
import {nav} from './dataReducers'
import {redAuth,redLogError} from './authReducers'
import {redPass} from './passwordReducers'
import {redWarehouseIn,redUpdateWarehouseIn,redDetailWarehouseIn} from './warehouseInReducers'
import {redWarehouseOut,redUpdateWarehouseOut} from './warehouseOutReducers'
import {redGetUserId} from './userReducers'
// import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
    nav:nav,
    redAuth:redAuth,
    redPass:redPass,
    redWarehouseIn:redWarehouseIn,
    redUpdateWarehouseIn:redUpdateWarehouseIn,
    redWarehouseOut:redWarehouseOut,
    redUpdateWarehouseOut:redUpdateWarehouseOut,
    redDetailWarehouseIn:redDetailWarehouseIn,
    redGetUserId:redGetUserId,
    redLogError:redLogError
})

export default rootReducer