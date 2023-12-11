import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }

  return (
    <>
      <div className="flex" onClick={handleClick}>
        <div className="flex-initial w-64 font-bold underline decoration-sky-500 text-red-800">
          <button className='w-32 rounded bg-white text-black'>Light / Dark</button>
        </div>
      </div>
    </>
  );
}

export default App
