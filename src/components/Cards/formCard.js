import React from "react";
import "../../styles/_formCard.scss";

//  {
//         "category": [
//             "Health",
//             "E-commerce",
//             "Education"
//         ],
//         "created": "2022-02-10T08:53:07.658409",
//         "description": "eiusmod veniam, occaecat consectetur minim",
//         "link": "https://formpl.us/templates",
//         "name": "magna laborum. deserunt"
//     },
const FormCard = ({name,description,link}) => {
  return (
    <div className="card">
      <div className="card__main">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="card__bottom">
        <a href={link}>
          <h3>Use Template</h3>
        </a>
      </div>
    </div>
  );
};

export default FormCard;
