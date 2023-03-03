import React from 'react';
import imbd from '../assets/Imgs/imbd.png';
import { BsCartPlusFill } from 'react-icons/bs';

function Item({ items }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-full flex items-center justify-between p-4">
        <p>&nbsp;</p>
        <p className="text-xs mr-28">NAME</p>
        <p className="text-xs mr-2">PRICE</p>
      </div>
      {items.map(({ id, name, description, price, imgUrl, size }) => {
        return (
          <div
            className="flex items-center justify-between p-4 border-t w-full"
            key={id}
          >
            <img src={imbd} alt={name} />
            <div>
              <h2 className="font-semibold text-lg">{name}</h2>
              <h4 className="text-xs w-[200px]">{description}</h4>
              {size ? <p className="text-xs">{size}</p> : ''}
            </div>
            <div className="text-center">
              <p className="font-bold mb-1">{price}</p>
              <button className="hover:scale-90">
                <BsCartPlusFill size={28} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Item;
