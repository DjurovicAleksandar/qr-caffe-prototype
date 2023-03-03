import { db, auth } from '../config/firebase';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDocs, collection, doc, getDoc } from 'firebase/firestore';

function BarHome() {
  const [menu, setMenu] = useState([
    {
      hotdrinks: [],
      softdrinks: [],
      alcoholdrinks: [],
      beer: [],
      wines: [],
      food: [],
    },
  ]);
  const hotDrinksCollectionRef = collection(db, 'hotdrinks');
  const softDrinksCollectionRef = collection(db, 'softdrinks');
  const alcoholdrinksCollectionRef = collection(db, 'alcoholdrinks');
  const beerCollectionRef = collection(db, 'beer');
  const winesCollectionRef = collection(db, 'wines');
  const foodCollectionRef = collection(db, 'food');

  const getMenu = async () => {
    const getData = async collection => {
      try {
        const res = await getDocs(collection);

        return res.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
      } catch (err) {
        console.error(err);
      }
    };
    //Read the data from db
    //Set menu list to be equal to that data
    try {
      const hotDrinks = await getData(hotDrinksCollectionRef);
      const softDrinks = await getData(softDrinksCollectionRef);
      const alcoholDrinks = await getData(alcoholdrinksCollectionRef);
      const beer = await getData(beerCollectionRef);
      const wines = await getData(winesCollectionRef);
      const food = await getData(foodCollectionRef);

      setMenu(() => [
        [...hotDrinks],
        [...softDrinks],
        [...alcoholDrinks],
        [...beer],
        [...wines],
        [...food],
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const menu2 = [
    ['/hotdrinks', 'Hot bewerages'],
    ['/colddrinks', 'Cold bewerages'],
    ['/beer', 'Beer'],
    ['/wines', 'Wine'],
    ['/food', 'Food'],
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full h-full text-black">
        <h1 className=" text-center mt-4 mb-12 text-xl font-bold text-green-200">
          Welcome to our MENU
        </h1>
        <div className="h-[500px]  overflow-y-auto">
          {menu2.map(([path, title], index) => {
            return (
              <Link
                key={index}
                className="bg-gradient-to-r from-yellow-200 block w-4/5  mx-auto text-center mt-5 p-2 hover:scale-90 ease-linear duration-200"
                to={path}
              >
                {title}
              </Link>
            );
          })}
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
export default BarHome;
