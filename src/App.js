import React from "react";
import FormCard from "./components/Cards/formCard";
import Header from "./components/Header/Header";
import Alert from "./components/Alert";

function App() {
  const options = [{ value: "all", name: "All" }];
  return (
    <>
      <Header />
      <Alert />;
    </>
  );
}

export default App;
