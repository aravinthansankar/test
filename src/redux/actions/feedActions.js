import {GET_Feed} from '../types'



export const fetchFeed =  (text,p) => {

    let API_URL = `https://api.dailymotion.com/videos?fields=title%2Cdescription%2Cembed_url%2Cthumbnail_480_url&search=${text}&page=1&limit=${p}`
    
   // console.log(GET_Feed);
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
            });
            const json = await result.json();
            //  console.log(json)
            if (json) {
                dispatch({
                    type: 'GET_Feed',
                    payload: json.list
                });
                // console.log(json.list)
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}





export const fetchFeed_2 =  (text,p) => {

    let API_URL = `https://api.dailymotion.com/videos?fields=title%2Cdescription%2Cembed_url%2Cthumbnail_480_url&search=${text}&page=1&limit=${p}`
    console.log(GET_Feed);
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: 'GET_Feed_2',
                    payload: json.list
                });
                // console.log(json.list[2])
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}






