import React from "react";
import Login from "./Login";

let isUserRegisterd = true;

function App() {
  return (
    <div className="container">
      <Login isRegistered={isUserRegisterd} />
    </div>
  );
}

export default App;
