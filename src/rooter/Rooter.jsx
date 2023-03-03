import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';

import {
  HotDrinks,
  ColdDrinks,
  Beer,
  Wines,
  Food,
} from '../components/categories/index';
import BarHome from '../components/BarHome';
import Navigation from '../components/Navigation';
import Login from '../components/Login';
import Admin from '../components/Admin';

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<BarHome />} />
      <Route path="/hotdrinks" element={<HotDrinks />} />
      <Route path="/colddrinks" element={<ColdDrinks />} />
      <Route path="/beer" element={<Beer />} />
      <Route path="/wines" element={<Wines />} />
      <Route path="/food" element={<Food />} />
      <Route path="/caffe-login" element={<Login />} />
      <Route path="/caffe-admin" element={<Admin />} />
    </Route>
  )
);

export default router;
