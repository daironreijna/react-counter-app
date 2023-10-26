import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorMessage from './ErrorMessage';

function App() {
  const [count, setCount] = useState(0)


  const [error, setError] = useState(''); // Initialize error state

  const handleIncrement = () => {
    setError(''); // Clear error on decrement
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setError(''); // Clear error on decrement
      setCount((count) => count - 1);
    } else {
      setError('Count cannot go below zero');
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleDecrement}>
          Decrement
        </button>
         
        <button onClick={handleIncrement}>
          Increment
        </button>
        <p>count is {count}</p>

        {error && <ErrorMessage message={error} />} {/* Display the error message if it exists */}

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
