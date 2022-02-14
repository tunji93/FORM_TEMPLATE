import React, { useEffect, useState } from "react";
import FormCardList from "./components/Cards/formCardList";
import Header from "./components/Header/Header";
import Alert from "./components/Alert";
import { useDispatch, useSelector } from "react-redux";
import fetchAllForms from "./Redux/Actions/fetchAllForms";
import filterForms from "./Redux/Actions/filterForms";

function App() {
  const options = {
    category: [
      { name: "All", value: null, action: null },
      { name: "Education", value: "Education", action: null },
      { name: "E-commerce", value: "E-commerce", action: null },
      { name: "Health", value: "Health", action: null },
    ],
    order: [
      { name: "Default", value: null, action: null },
      { name: "Ascending", value: "ascending", action: null },
      { name: "Descending", value: "descending", action: null },
    ],
    date: [
      { name: "Default", value: null, action: null },
      { name: "Ascending", value: "ascending", action: null },
      { name: "Descending", value: "descending", action: null },
    ],
  };
  const [toggle, setToggle] = useState(false);
  const toggleSort = () => {
    setToggle(!toggle);
  };
  const dispatchAction = (input) => {
    dispatch(filterForms(input))
  }
  
  const dispatch = useDispatch();
  const queries = useSelector((initialState) => initialState);
  const data = queries.initialState;
  const { search, category, order, date, forms } = data;
  console.log(forms.splice(0,15))

  useEffect(() => {
    dispatch(fetchAllForms());
  }, [dispatch]);
  return (
    <>
      <Header options={options} toggle={toggle} onClickHandler={toggleSort} call={dispatchAction} />
      <Alert />;
      <FormCardList
        data={data.forms.slice(0, 200)}
        category={category ? category : "All"}
      />
    </>
  );
}

export default App;
