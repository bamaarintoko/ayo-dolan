import Api from "../../utils/Api";
import {GET_DATA_PEOPLE} from "../../utils/Constants";

export function actGetPeople() {
    return dispatch => {

        Api.GET('?page=1&results=10&').then((response) => {
            if (response.status===200){
            // console.log("--->", response)

                dispatch({
                    type:GET_DATA_PEOPLE,
                    status_get:true,
                    message:'people found',
                    data:response.data.results
                })
            }
            // this.setState({
            //     data: response.data.results
            // })
        }).catch(error => {
            console.log(error)
        })
    }
}