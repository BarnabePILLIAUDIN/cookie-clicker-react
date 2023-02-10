import React from 'react';

const ItemRow = (props) => {
  const { name, price, cpc, cps, owned, coins, setCoins, setCpc, setCps, id, data } = props
  
  const updateProperty = (prop,minimum) =>{
    return Object.entries(data.items)
  .map(([, element]) => element[prop] * element.owned)
  .reduce((acc, prev) => acc + prev, minimum)
  }
  
  const buy = () => {
    if (coins < price) {
      alert("You don't have enough money!")
      return
    }
    data.items[id].owned += 1
    setCoins(coins - price)
    setCpc(updateProperty("cpc",1))
    setCps(updateProperty("cps",0))
  }

  const sell = () => {
    if (!owned > 0) {
      alert("You can't sell something you don't own !")
      return
    }
    data.items[id].owned -= 1
    setCoins(coins + (price / 2))
    setCpc(updateProperty("cpc"))
    setCps(updateProperty("cps"))
  }
  return (
    <tr>
      <td className='border border-black p-4 text-center'>{name }</td>
      <td className='border border-black p-4 text-center'>{price}</td>
      <td className='border border-black p-4 text-center'>{cpc}</td>
      <td className='border border-black p-4 text-center'>{ cps}</td>
      <td className='border border-black p-4 text-center'>{ owned}</td>
      <td className='border border-black p-4 text-center'>
        <button onClick={buy} className="bg-green-500 px-4 py-2 text-white rounded-xl">Buy</button>
      </td>
      <td className='border border-black p-4 text-center'>
        <button onClick={sell} className="bg-red-500 px-4 py-2 text-white rounded-xl">Sell</button>
      </td>
    </tr>
  );
};

export default ItemRow;