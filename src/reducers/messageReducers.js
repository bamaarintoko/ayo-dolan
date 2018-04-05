import {initialGet} from "../utils/initialState";
import {GET_MESSAGE, GET_MESSAGE_REFRESH} from "../utils/Constants";

export function redGetMessage(state = initialGet, action) {
    switch (action.type){
        case GET_MESSAGE :
            return {
                status : true,
                status_get : action.status_get,
                data : action.data,
                message : action.message
            }
        case GET_MESSAGE_REFRESH :
            return {
                status: false,
                status_get : false,
                data :[],
                message:""
            }
        default : return state;
    }
}