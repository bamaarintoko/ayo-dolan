
export function login_(params) {
    return dispatch=>{
        dispatch({
            type : 'LOGIN_SUCCESS',
            status_login : true,
            data:params.profile,
            message:"login facebook sukses"
        })
    }
}