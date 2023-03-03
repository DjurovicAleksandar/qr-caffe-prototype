import React, { useEffect, useState } from 'react';
import Item from '../Item';
import imbd from '../../assets/Imgs/imbd.png';
import { getMenu } from '../../config/getMenu';
import { db } from '../../config/firebase';
import { collection } from 'firebase/firestore';

function Food() {
  const [food, setFood] = useState([]);

  const foodCollectionRef = collection(db, 'food');

  useEffect(() => {
    getMenu(foodCollectionRef, setFood);
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className=" w-full h-4/5 text-green-200 overflow-y-auto">
        <h1 className=" text-center mt-4 mb-12 text-xl font-bold">FOOD</h1>
        <Item items={food} />
      </div>
    </div>
  );
}

export default Food;
