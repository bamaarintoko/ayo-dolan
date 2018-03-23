import Api from "../../utils/Api";

export function actLogin(params) {
    console.log(params)
    return dispatch=>{
        Api.POST("back/user/login",params)
            .then((response)=>{
                if (response.data.status){
                    dispatch({type:'HOME'})
                    dispatch({
                        type: 'LOGIN_SUCCESS',
                        status_login: true,
                        data: response.data.results[0],
                        message: "login sukses"
                    })
                }
                console.log(response.data)
            }).catch((error)=>{
                console.log(error)
        })
        dispatch({
            type:'a'
        })
    }
}