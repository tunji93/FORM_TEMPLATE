import { ALL_FORMS_FAIL, ALL_FORMS_REQUEST, ALL_FORMS_SUCCESS } from "../ActionTypes"
import request from "../../Api"
import axios from "axios"

const fetchAllForms = () => async dispatch => {
    
    try {
        dispatch({
            type: ALL_FORMS_REQUEST
        })
        const{data} = await axios ("https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates")
        

        

         dispatch({
            type: ALL_FORMS_SUCCESS,
            payLoad: {
                forms: data,
                page: 1,
                category: "All",
                loading:false
            }
        })
        
        
        
    } catch (error) {
        dispatch({
            type: ALL_FORMS_FAIL,
            payLoad: error.message
                
            
        })
    }
}

export default fetchAllForms