
import {GET_Feed} from '../types'

const initialState = {
    availableFeed:[],
    
}


const feedReducer = (state = initialState, action) => {

    if (action.type=="GET_Feed") 
    {   
        return({
           ...state,availableFeed:action.payload                  
          }) 
        }
    return state;
}
export default feedReducer;


