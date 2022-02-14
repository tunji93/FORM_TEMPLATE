import React, {useState} from "react";
// import {RiArrowfilterLine} from "react-icons/io5"
import "../../styles/_Filter.scss";

const Filter = ({name,options,call}) => {
  const [input,setInput] = useState("")
  const handleChange= (e) => {
    setInput(e.target.value)
    
    const myobj = {
      name: e.target.name,
      value: e.target.value
    }
    
    call(myobj)
    
  }
  return (
    <div className="filter">
      <span className="filter__type">{name}</span>
      <select name={name} className="filter__select" onChange={(e)=>handleChange(e)}value={input}>
        {options.map(({ name, value }) => (
          <option value={value}> {name}</option>
        ))}
      </select>
      {/* <span className="filter__icon"><RiArrowfilterLine /></span> */}
    </div>
  );
};

export default Filter;
