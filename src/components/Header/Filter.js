import React from "react";
// import {RiArrowfilterLine} from "react-icons/io5"
import "../../styles/_Filter.scss"

const Filter = ({name, options}) => {
  return (
    <div className="filter">
        <span className="filter__type">{name}</span>
        <select className="filter__select">
            {options.map(({name, value}) => <option value={value}> {name} </option> )}
        </select>
        {/* <span className="filter__icon"><RiArrowfilterLine /></span> */}
    </div>
  )
};

export default Filter;
