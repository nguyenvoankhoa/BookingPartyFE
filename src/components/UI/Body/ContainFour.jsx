import React from "react";
import Card from "../Card";

const ContainFour = ({ list_card, fw, center, fs }) => {
  return (
    <div className="row mb-5">
      {list_card.map((card) => (
        <div key={card.id} className="col-3">
          <Card
            name={card.name}
            img_src={card.image_src}
            price={card.price}
            fw={fw}
            center={center}
            fs={fs}
          />
        </div>
      ))}
    </div>
  );
};

export default ContainFour;
