import {GET_DETAIL_INCOMING_ITEMS_SUCCESS} from "../../utils/Constants";

export function actGetUserId(id) {
    console.log(id)
    return dispatch=>{
        dispatch({
            type:'GET_DETAIL_INCOMING_ITEMS_SUCCESS',
            status_get : true,
            data : id
        })
    }
}