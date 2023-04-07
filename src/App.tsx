import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useFirebase from './hooks/useFirebase';
import { ToastContainer, Slide } from 'react-toastify';
import { Messaging, onMessage } from 'firebase/messaging';
import { toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0);

  const { message, token } = useFirebase();

  useEffect(() => {
    onMessage(message as Messaging, (observer) => {
      toast(observer.notification?.body);
    });
  }, []);

  return (
    <div className='App'>
      <ToastContainer
        icon={false}
        position='top-center'
        autoClose={3000}
        hideProgressBar
        transition={Slide}
      />

      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>{token || 'firebase token not found'}</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
