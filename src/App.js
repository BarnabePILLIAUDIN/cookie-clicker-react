import { useEffect, useState } from "react";
import Shop from "./Shop";

function App() {
  const [coins, setCoins] = useState(0);
  const [cps, setCps] = useState(0);
  const [cpc, setCpc] = useState(1);

  const handleWork = () => {
    setCoins(coins + cpc);
  };

  const handleCpc = () => {
    console.log(`${coins} ${cps}`);
    if (cpc === 1) {
      setCoins(coins + cps);
      return;
    }
    setCoins(coins + cpc - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleCpc();
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <h1 className="text-6xl m-6">🍪 Welcome to delicious cookie clicker!</h1>
      <h2 className="m-6 text-3xl">🪙 {coins}</h2>
      <h3 className="text-2xl m-6">
        🖱️CPC {cpc} ⌚CPS: {cps}
      </h3>
      <button
        onClick={handleWork}
        className="mx-9 my-2 bg-blue-500 text-white px-4 py-2 rounded-xl"
      >
        WORK!
      </button>
      <Shop
        coins={coins}
        cps={cps}
        setCoins={setCoins}
        setCpc={setCpc}
        setCps={setCps}
      ></Shop>
    </div>
  );
}

export default App;
