import React, { useState } from 'react';
import ItemRow from './ItemRow';

const Shop = (props) => {
  const {coins,setCoins,setCpc,setCps} = props
  const [data,setData] = useState({
    headers: ["Name", "Price", "CPC", "CPS", "Owned", "Buy ?", "Sell ?"],
    items: {
      bronzePicaxe: {
        name: "Bronze pickaxe",
        price: 10,
        cpc: 3,
        cps: 0,
        owned:0
      },
      silverPckaxe: {
        name: "Silver Pickaxe",
        price: 100,
        cpc: 40,
        cps: 10,
        owned:0
      },
      goldenPickaxe: {
        name: "Golden Pickaxe",
        price: 500,
        cpc: 250,
        cps: 55,
        owned:0
      }
    }
  })

  return (
    <div>
      <table className='table-auto border border-slate-800 border-collapse mx-2 my-4'>
        <thead>
          <tr>
            {
              data.headers.map((element,id) => (
            <td key={id} className="border border-black p-4 text-center"> {element }</td>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {Object.entries(data.items).map((array) => (
            <ItemRow
              key={array[0]}
              name={array[1].name}
              price={array[1].price}
              cps={array[1].cps}
              cpc={array[1].cpc}
              owned={array[1].owned}
              coins={coins}
              setCoins={setCoins}
              setCpc={setCpc}
              setCps={setCps}
              data={data}
              id={array[0]}
            >
              </ItemRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shop;