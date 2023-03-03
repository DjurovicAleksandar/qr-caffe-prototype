import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useRef } from 'react';
import { useNavigate, redirect } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      //   console.log(auth?.currentUser);
      navigate('/caffe-admin', { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full mt-[30%] flex flex-col items-center justify-center gap-8">
      <h1 className="text-green-200">Admin login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          ref={emailRef}
          value={email}
          onChange={() => setEmail(emailRef.current.value)}
          className="p-2"
          type="email"
          required
          placeholder="Email adress"
        />
        <input
          ref={passwordRef}
          value={password}
          onChange={() => setPassword(passwordRef.current.value)}
          className="p-2"
          type="password"
          required
          placeholder="Password"
        />
        <input className="bg-green-200 p-2" type="submit" value="Log in" />
      </form>
    </div>
  );
}

export default Login;
