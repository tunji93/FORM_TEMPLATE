import React, { useEffect, useState } from "react";
import FormCardList from "./components/Cards/formCardList";
import Header from "./components/Header/Header";
import Alert from "./components/Alert";
import { useDispatch, useSelector } from "react-redux";
import fetchAllForms from "./Redux/Actions/fetchAllForms";
import axios from "axios";
function App() {
  const options = {
    category: [
      { name: "All", value: "all", action: null },
      { name: "Education", value: "education", action: null },
      { name: "E-commerce", value: "e-commerce", action: null },
      { name: "Health", value: "health", action: null },
    ],
    order: [
      { name: "Default", value: "default", action: null },
      { name: "Ascending", value: "ascending", action: null },
      { name: "Descending", value: "descending", action: null },
    ],
    date: [
      { name: "Default", value: "default", action: null },
      { name: "Ascending", value: "ascending", action: null },
      { name: "Descending", value: "descending", action: null },
    ],
  };
  const [toggle, setToggle] = useState(false);
  const toggleSort = () => {
    setToggle(!toggle);
  };
  console.log(toggle)
  const dispatch = useDispatch();
  const queries = useSelector((initialState) => initialState);
  const data = queries.initialState;
  const { search, category, order, date, forms } = data;

  useEffect(() => {
    dispatch(fetchAllForms());
  }, [dispatch]);
  return (
    <>
      <Header options={options} toggle={toggle} onClickHandler={toggleSort} />
      <Alert />;
      <FormCardList
        data={data.forms.slice(0, 200)}
        category={category ? category : "All"}
      />
    </>
  );
}

export default App;
