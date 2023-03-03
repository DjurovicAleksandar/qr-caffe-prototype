import { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

function Admin() {
  const navigate = useNavigate();

  const [optionValue, setOptionValue] = useState('hotdrinks');
  //New item states
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemType, setItemType] = useState('');
  const [itemImgUrl, setItemImgUrl] = useState('');
  const [reference, setReference] = useState('');

  const selectHandler = e => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };

  async function onItemSubmit() {
    const ref = collection(db, optionValue);

    await addDoc(ref, {
      description: itemDescription,
      price: itemPrice,
      name: itemName,
      imgUrl: itemImgUrl,
      type: itemType,
    });

    navigate('/', { replace: true });
  }

  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full h-full text-black">
        <h1 className=" text-center mt-4 mb-12 text-xl font-bold text-green-200">
          Welcome back, admin
        </h1>
        <div className="mx-auto h-[500px] w-4/5  overflow-y-auto flex flex-col items-cemter gap-4">
          <h1 className="text-green-200">Add an article</h1>
          <label className="text-xs text-green-200" htmlFor="reference">
            Coose a ctegory
          </label>
          <select name="reference" id="reference" onChange={selectHandler}>
            <option value="hotdrinks">Hot drinks</option>
            <option value="colddrinks">Soft drinks</option>
            <option value="acloholdrinks">Alcohol drinks</option>
            <option value="beer">Beer</option>
            <option value="wines">Wines</option>
            <option value="food">Food</option>
          </select>
          <input
            onChange={e => setItemName(e.target.value)}
            placeholder="Enter article name"
          />
          <input
            onChange={e => setItemDescription(e.target.value)}
            placeholder="Enter article description"
          />
          <input
            onChange={e => setItemPrice(Number(e.target.value))}
            placeholder="Enter article price"
          />
          <input
            onChange={e => setItemType(e.target.value)}
            placeholder="Enter article type"
          />
          <input
            onChange={e => setItemImgUrl(e.target.value)}
            placeholder="Enter article img url"
          />
          <button className="text-green-200 border" onClick={onItemSubmit}>
            Add
          </button>
        </div>
        <div className="w-4/5 mx-auto mt-12 flex items-center justify-between text-green-200">
          <button className="px-8 py-2 border border-green-200 hover:scale-90 ease-linear duration-200">
            Call a waiter
          </button>
          <button className="px-8 py-2 border border-green-200 hover:scale-90 ease-linear duration-200">
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
