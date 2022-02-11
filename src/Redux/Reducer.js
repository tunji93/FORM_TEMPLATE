import { ALL_FORMS_REQUEST, ALL_FORMS_SUCCESS, ALL_FORMS_FAIL } from "./ActionTypes"

const reducer = (prevState= {
    forms: [],
    display: [],
    token: 1,
    loading: false,
    category: null,
    error: null,
    filter: null,
    search: null

}, action) => {
   const {type,payLoad} =  action 

   switch(type) {
       case ALL_FORMS_SUCCESS:
           return {
               ...prevState,
               loading: payLoad.loading,
               //display: payLoad.forms,
               forms: payLoad.forms,
               token: payLoad.page,
               category: payLoad.categories
           }
       
       case ALL_FORMS_REQUEST:
               return {
                   ...prevState,
                   loading: true

                    
           }

       case ALL_FORMS_FAIL:
               return {
                   ...prevState,
                   error: payLoad,
                   loading: false,
                    
           }

           
       default: 
           return prevState
   }
}

export default reducer