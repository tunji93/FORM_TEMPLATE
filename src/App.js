import React, { useEffect } from "react";
import FormCard from "./components/Cards/formCard";
import Header from "./components/Header/Header";
import Alert from "./components/Alert";
import { useDispatch } from "react-redux";
import fetchAllForms from "./Redux/Actions/fetchAllForms";
import axios from "axios"
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAllForms())
    async function a() { 
    const {data} = await axios ("https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates")
    console.log(data)}
    a()
  },[dispatch])
  const options = [{ value: "all", name: "All" }];
  return (
    <>
      <Header />
      <Alert />;
    </>
  );
}

export default App;
