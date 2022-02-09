import React from "react"
import FormCard from "./components/form_card/FormCard"
import Search from "./components/Header/Search"
import Filter from "./components/Header/Filter"


function App() {
  const options = [{value:'all', name:'All'}]
  return (
    //<FormCard />
    <Filter name='category' options={options} />
  );
}

export default App;
