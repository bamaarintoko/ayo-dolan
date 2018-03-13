import {GET_DATA_PEOPLE, GET_DATA_PEOPLE_REFRESH} from '../utils/Constants'
const initialGetDataPeople = {
    status : false,
    status_get : false,
    message : '',
    data : []
}

export function redGetDataPeople(state=initialGetDataPeople, action) {
    // console.log(action.type)
    switch (action.type){
        case GET_DATA_PEOPLE :
            return {
                status:true,
                status_get:action.status_get,
                message:action.message,
                data:action.data
            }
        case GET_DATA_PEOPLE_REFRESH:
            return {
                status : false,
                status_get : false,
                message : '',
                data : []
            }
        default : return state
    }
}