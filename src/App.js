import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
const App = () => {
  const num = 22;
  return (
    <div>
      <Header />
      <h4>{num}</h4>
      <h4>{11 + 39 } </h4>
      <h4>{"aslan".toUpperCase()}</h4>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
    </div>
  );
};

export default App;
