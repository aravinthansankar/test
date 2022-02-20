
import {GET_Feed} from '../types'

const initialState = {
    availableFeed:[],
    
}


const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_Feed:
            return { ...state, availableFeed:action.payload};
        default:
            return state;

 
      }
}

export default feedReducer;


