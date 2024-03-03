import React from "react";

import Card from "../Card";

const ContainThree = ({ list_card, fw, center, fs }) => {
  return (
    <div className="row">
      {list_card.map((card) => (
        <div key={card.id} className="col-4">
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

export default ContainThree;
