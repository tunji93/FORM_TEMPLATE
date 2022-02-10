import React from "react";
import FormCard from "./formCard";
import "../../styles/_FormCardList.scss";

const FormCardList = ({ data, category }) => {
  return (
    <div className="templates">
      <div className="temlates__header">
        <div className="temlates__header__category">{category} Template</div>
        <div className="temlates__header__count">{data.length} temlates</div>
      </div>

      <div className="template__cardlist">
        {data.map(({ name, decription, link }) => (
          <FormCard name={name} decription={description} link={link} />
        ))}
      </div>
    </div>
  );
};

export default FormCardList;
