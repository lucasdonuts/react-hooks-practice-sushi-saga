import React, { useState } from "react";

function Sushi({ sushi, eatSushi, money, plates }) {
  const [isEaten, setIsEaten] = useState(plates.includes(sushi));
  const { name, img_url, price } = sushi;

  const handleSushiClick = () => {
    if( money >= sushi.price && !plates.includes(sushi) ) {
      setIsEaten( prev => !prev );
      eatSushi(sushi);
    } else if( money >= sushi.price && plates.includes(sushi) ) {
      alert("You already ate that sushi!");
    } else {
      alert("You can't afford that sushi");
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={ handleSushiClick }>
        {isEaten 
          ? null
          : (
              <img
                src={ img_url }
                alt={ name }
                width="100%"
              />
            )}
      </div>
      <h4 className="sushi-details">
        { name } - ${ price }
      </h4>
    </div>
  );
}

export default Sushi;
