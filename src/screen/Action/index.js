import {GET_MESSAGE} from "../../utils/Constants";
import Api from "../../utils/Api";


export function actionGet(url, red, params, header) {
    // console.log(url)
    return dispatch => {
        Api.POST(url, params).then((response) => {
            // console.log(response)
            dispatch({
                type: red,
                status_get: response.data.status,
                data: response.data.result,
                message : response.data.message
            })
        })
    }
}