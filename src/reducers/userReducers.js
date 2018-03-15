
const initialGetUserId = {
    status: false,
    status_get : false,
    data : ''
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