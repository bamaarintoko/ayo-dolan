import axios from 'axios'
import qs from 'qs'

// const host      = "http://192.168.100.4/erp/public/api/";
// const host      = "http://erp.mlskoding.com/api/";
const host      = "https://randomuser.me/api/";
// export const url_ = 'http://192.168.100.38:3010/';
// export const url_ = 'http://192.168.43.147:3010/';
export const url_ = 'http://api.malaskoding.com/';

export default class Api {
    static POST(end_point,params){

        const url = `${url_}${end_point}`;
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
        return axios.post(url,qs.stringify(params))
    }

    static GET(end_point){
        const url = `${host}${end_point}`;
        // console.log(url)
        return axios.get(url)
    }
    // }
}