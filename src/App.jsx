import { auth } from '../src/config/firebase';
import { RouterProvider } from 'react-router-dom';
import router from './rooter/Rooter';

function App() {
  // console.log(auth);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
