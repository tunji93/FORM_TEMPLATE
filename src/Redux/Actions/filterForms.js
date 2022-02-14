import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { SORT_BY } from "../ActionTypes";

const filterForms =
  ({name,value}) =>
  
  (dispatch,getState) => {
    
    if (SORT_BY[name] === "FILTER_BY_CATEGORY") {
      if (value == null) {
        dispatch({
          type: SORT_BY[name],
          payLoad: {
            category: value,
            order: null,
            search: " ",
            date: null,
            data: getState().initialState.Allforms

          },
        }); 
      }
      else {
        console.log(SORT_BY[name],value)
        //console.log(getState())
        const data = getState().initialState.AllForms.filter((el) => el["category"].includes(value))

        dispatch({
          type: SORT_BY[name],
          payLoad: {
            category: value,
            order: null,
            search: " ",
            date: null,
            data: data
      }
      })
      
      }
    }
    else if (name === "Order") {
      if (value = "ascending") {
        const data = getState().initialState.AllForms
        data.sort((a, b) => a.name.localeCompare(b.name))
        dispatch({
          type: SORT_BY[name],
          payLoad: {
            category: value,
            order: null,
            search: " ",
            date: null,
            data: data
      }
      })
      }
      if (value = "descending") {
        const data = getState().initialState.AllForms
        data.sort((a, b) => b.name.localeCompare(a.name))
        dispatch({
          type: SORT_BY[name],
          payLoad: {
            category: value,
            order: null,
            search: " ",
            date: null,
            data: data
      }
      })
      }
    }
    else{
      if (value = "ascending") {
        const data = getState().initialState.AllForms
        data.sort((a, b) => a.created.localeCompare(b.created))
        dispatch({
          type: SORT_BY[name],
          payLoad: {
            date: value,
            data: data
      }
      })
      }
      if (value = "descending") {
        const data = getState().initialState.AllForms
        data.sort((a, b) => b.created.localeCompare(a.created))
        dispatch({
          type: SORT_BY[name],
          payLoad: {
            date: value,
            data: data
      }
      })
      }
    }
    }
  
    
    
  

export default filterForms;
