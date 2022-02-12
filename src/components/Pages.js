import React from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import "../styles/_Pages.scss";

const Pages = ({ count, page }) => {
  return (
    <div className="page">
      <div className="page__previous">
        <span className="page_previous_icon">
          <GrFormPrevious size="2.5rem" />
        </span>
        Previous
      </div>
      <div className="page__currpage">
        <span className="page__currpage__value">{page}</span>
        Of
        {count}
      </div>
      <div className="page__next">
        Next
        <span className="page_next_icon">
          <GrFormNext size="2.5rem" />
        </span>
      </div>
    </div>
  );
};

export default Pages;
