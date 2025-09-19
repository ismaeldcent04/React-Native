import { useState } from "react";
import { BasicFunctions, BasicTypes, ObjectLiterals } from "./typescript";
import { Counter, CounterWithHook, LoginPage, UsersPage } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <h1>Introduccion a TS - React</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/* <CounterWithHook /> */}
        {/* <LoginPage /> */}
        <UsersPage />
      </main>
    </>
  );
}

export default App;
