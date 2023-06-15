import React from "react";
import Favorites from "../Favorites/Favorites";
import HomePage from "../HomePage/HomePage";

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <HomePage />
      <Favorites />
    </div>
  );
}

export default App;
