import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer({ sushis }) {
  const sushiComponents = sushis.map( sushi => {
    return(
      <Sushi key={ sushi.id } sushi={ sushi } />
    )
  } )

  const [selectedSushis, setSelectedSushis] = useState([0, 4])

  const sushisToDisplay = sushiComponents.slice(...selectedSushis)

  return (
    <div className="belt">
      { sushisToDisplay }
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
