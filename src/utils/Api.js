import axios from 'axios'
import qs from 'qs'

// const host      = "http://192.168.100.4/erp/public/api/";
// const host      = "http://erp.mlskoding.com/api/";
const host      = "https://randomuser.me/api/";


export default class Api {
    static POST(end_point,params){

        const url = `${host}${end_point}`;
        const config = {
            headers: {'Authorization': 'Bearer birds flyy south'}
        };
        //let token = {token:'qweweqwe'}
        //console.log((token));
        //console.log((config));

        // const a = {
        //     ...params,
        //     ...token
        // }
        //console.log(a);
        // return axios.post(url,qs.stringify(params))
        return axios.post(url,qs.stringify(params),config)
    }

    static GET(end_point){
        const url = `${host}${end_point}`;
        console.log(url)
        return axios.get(url)
    }
    // }
}