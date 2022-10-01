import React from "react";
import "./fruit-card.css";

const FruitCard = ({ fruits }) => {
  const eachFruit = fruits.map((fruit) => (
    <div className="fruit-card" key={fruit.id}>
      <div className="fruit-detail-container">
        <div className="fruit-name">
          <a
            href={`/showd/${fruit.name}`}
            onClick={() => {
              console.log("fruit.name = ",fruit.name)
            }}
          >
            {fruit.name}
          </a>
        </div>

        <div className="fruit-detail">
          Genus: <span className="fruit-detail-span">{fruit.genus}</span>
        </div>

        <div className="fruit-detail">
          Family: <span className="fruit-detail-span">{fruit.family}</span>
        </div>

        <div className="fruit-detail">
          Order: <span className="fruit-detail-span">{fruit.order}</span>
        </div>
      </div>
    </div>
  ));

  return <>{eachFruit ? eachFruit : <div>Loading...</div>}</>;
};

export default FruitCard;
