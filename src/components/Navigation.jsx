import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';

function Navigation() {
  return (
    <div className="bg-transparent text-green-200 p-4 text-2xl flex items-center justify-between">
      <Link to="/">
        {' '}
        <h1 className="cursor-pointer">QRbar</h1>{' '}
      </Link>
      <button className="hover:scale-90">
        <BsFillCartFill />
      </button>
      <Link to="/caffe-login">Account</Link>
    </div>
  );
}

export default Navigation;
