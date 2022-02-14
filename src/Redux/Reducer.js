import {
  ALL_FORMS_REQUEST,
  ALL_FORMS_SUCCESS,
  ALL_FORMS_FAIL,
  FILTER,
  ORDER,
  SORT_BY
} from "./ActionTypes";

const reducer = (
  prevState = {
    AllForms: [],
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
        AllForms: payLoad.forms,
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
    case SORT_BY.Category:
      return {
        ...prevState,
        category: payLoad.category,
        search: payLoad.search,
        date : payLoad.date,
        forms: payLoad.data
      };
      case SORT_BY.Date:
      return {
        ...prevState,
        order: payLoad.value,
        forms: payLoad.data
      };
      case SORT_BY.Order:
      return {
        ...prevState,
        order: payLoad.value,
        forms: payLoad.data
      };
    default:
      return prevState;
  }
};

export default reducer;
