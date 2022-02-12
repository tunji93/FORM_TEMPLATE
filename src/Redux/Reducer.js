import {
  ALL_FORMS_REQUEST,
  ALL_FORMS_SUCCESS,
  ALL_FORMS_FAIL,
  FILTER,
  ORDER,
} from "./ActionTypes";

const reducer = (
  prevState = {
    forms: [],
    order: null,
    date: null,
    token: 1,
    loading: false,
    category: "All",
    error: null,
    search: null,
  },
  action
) => {
  const { type, payLoad } = action;

  switch (type) {
    case ALL_FORMS_SUCCESS:
      return {
        ...prevState,
        loading: payLoad.loading,
        //display: payLoad.forms,
        forms: payLoad.forms,
        token: payLoad.page,
        category: payLoad.categories,
      };

    case ALL_FORMS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case ALL_FORMS_FAIL:
      return {
        ...prevState,
        error: payLoad,
        loading: false,
      };
    case FILTER.search:
      return {
        ...prevState,
        search: payLoad.value,
      };
    case FILTER.category:
      return {
        ...prevState,
        category: payLoad.value,
      };
    case ORDER.order:
      return {
        ...prevState,
        order: payLoad.value,
      };
    case ORDER.date:
      return {
        ...prevState,
        date: payLoad.value,
      };

    default:
      return prevState;
  }
};

export default reducer;
