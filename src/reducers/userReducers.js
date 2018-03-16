
const initialGetUserId = {
    status: false,
    status_get : false,
    data : ''
}
const initialAuthCredential = {
    status:false,
    status_login:false,
    data:[],
    message:""
}
export function redAuthCredential(state = initialAuthCredential, action) {
    // console.log(action.type)
    switch (action.type){
        case 'LOGIN_SUCCESS':
            return {
                status:true,
                status_login:action.status_login,
                data:action.data,
                message:action.message
            }
        case 'LOG_OUT':
            return {
                status:false,
                status_login:false,
                data:[],
                message:""
            }
        default : return state
    }
}

export function redGetUserId(state = initialGetUserId, action){
    // console.log(action.type)
    switch (action.type){
        case 'GET_ID' :
            return {
                status:true,
                status_get: action.status_get,
                data : action.data
            };
        default : return state
    }
}

export const rehydrated = (state = false , action) => {
    // console.log(action.type)
    switch (action.type) {
        case "persist/REHYDRATE" :
            return true;
            // break;
        default:
            return state;
    }
}