import { ORDER } from "../ActionTypes";

const orderForms =
  ({ name, value }) =>
  (dispatch) => {
    dispatch({
      type: ORDER[name],
      payLoad: {
        value,
      },
    });
  };
