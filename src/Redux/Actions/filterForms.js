import { FILTER } from "../ActionTypes";

const filterForms =
  ({ name, value }) =>
  (dispatch) => {
    dispatch({
      type: FILTERS[name],
      payLoad: {
        value,
      },
    });
  };

export default fetchAllForms;
