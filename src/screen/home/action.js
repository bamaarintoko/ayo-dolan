import Api from "../../utils/Api";

export function actGetPeople() {
    return dispatch => {

        Api.GET('?page=1&results=10&').then((response) => {
            console.log("--->", response)
                dispatch({
                    type:'a'
                })
            // this.setState({
            //     data: response.data.results
            // })
        }).catch(error => {
            console.log(error)
        })
    }
}