import { useState } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <article className="text-center">
        <h1>React Role Based Auth</h1>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </article>
    </>
  );
}

export default App;
