import { getDocs, collection, doc, getDoc } from 'firebase/firestore';

export const getMenu = async (ref, set) => {
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

  try {
    const hotdrinks = await getData(ref);
    set(hotdrinks);
    return;
  } catch (err) {
    console.error(err);
  }
};
