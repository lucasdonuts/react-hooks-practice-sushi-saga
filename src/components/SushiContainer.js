import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer({ sushis, eatSushi, money, plates }) {
  const sushiComponents = sushis.map( sushi => {
    return(
      <Sushi
        key={ sushi.id }
        sushi={ sushi }
        eatSushi={ eatSushi }
        money={ money }
        plates={ plates }
      />
    )
  } )

  const [selectedSushis, setSelectedSushis] = useState([0, 4])

  const sushisToDisplay = sushiComponents.slice(...selectedSushis)

  const nextSushiPage = () => {
    selectedSushis[1] === 100
      ? setSelectedSushis( prev => [0, 4] )
      : setSelectedSushis( prev => prev.map( num => num + 4 ) )
  }
  
  return (
    <div className="belt">
      { sushisToDisplay }
      <MoreButton nextSushiPage={ nextSushiPage } />
    </div>
  );
}

export default SushiContainer;
