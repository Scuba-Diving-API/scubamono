import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <div className="flex justify-center gap-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.6667)]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_rgba(97,218,251,0.6667)] animate-[spin_20s_linear_infinite]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8">Vite + React</h1>
      <div className="p-8 mb-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent px-5 py-2 font-medium bg-gray-800 dark:bg-gray-100 dark:text-black transition-colors hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 px-1 rounded">src/App.tsx</code> and save to test
          HMR
        </p>
      </div>
      <p className="text-gray-500">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
