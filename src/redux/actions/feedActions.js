import {GET_Feed} from '../types'



export const fetchFeed = (text) => {

    let API_URL = 'https://api.dailymotion.com/videos?fields=id%2Cembed_url%2Ctitle%2Cthumbnail_480_url%2Cduration%2Cdescription&page=1&limit=20&search='+text
    console.log(GET_Feed);
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_Feed,
                    payload: json
                });
                console.log(json)
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}










