import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);
  const [money, setMoney] = useState(150);

  useEffect( () => {
    fetch(API)
      .then( res => res.json() )
      .then( setSushis )
  }, [])

  const eatSushi = (sushiToEat) => {
    setPlates( prevPlates => [...prevPlates, sushiToEat])
    setMoney( prevMoney => prevMoney - sushiToEat.price )
  }
  
  return (
    <div className="app">
      <SushiContainer
        sushis={ sushis }
        eatSushi={ eatSushi }
        money={ money }
        plates={ plates }
      />
      <Table
        plates={ plates }
        money={ money }
      />
    </div>
  );
}

export default App;
