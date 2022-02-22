
import {GET_Feed} from '../types'

const initialState = {
    availableFeed:[],
    
}


const feedReducer = (state = initialState, action) => {

    if (action.type=="GET_Feed_2") 
    // console.log("re>>>>>>>>>>>>>>",state);
    {   
        
        
        return({
           ...state,availableFeed:state.availableFeed.concat(action.payload)              
          }) 
        }
        if (action.type=="GET_Feed") 
        // console.log("re>>>>>>>>>>>>>>",state);
        {   
            
            
            return({
               ...state,availableFeed:action.payload             
              }) 
            }
    return state;
}
export default feedReducer;


