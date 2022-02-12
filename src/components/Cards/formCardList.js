import React from "react";
import FormCard from "./formCard";
import "../../styles/_FormCardList.scss";

const FormCardList = ({ data, category }) => {
  console.log(data);
  return (
    <div className="templates">
      <div className="templates__header">
        <div className="templates__header__category">{category} Template</div>
        <div className="templates__header__count">{data.length} templates</div>
      </div>

      <div className="templates__cardlist">
        {data.map(({ name, description, link }) => (
          <FormCard name={name} description={description} link={link} />
        ))}
      </div>
    </div>
  );
};

export default FormCardList;
