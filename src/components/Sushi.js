import React, { useState } from "react";

function Sushi({ sushi }) {
  const [isEaten, setIsEaten] = useState(false);
  const { name, img_url, price } = sushi;

  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
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
