import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Favorites.css";

function Favorites() {
  const dispatch = useDispatch();
  const history = useHistory();

  const favoriteList = useSelector((store) => store.favoriteList);
  console.log("oh hi mark");
  useEffect(() => {
    dispatch({ type: "FETCH_IMAGES" });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <header >
  <div className="center">
    <button className="switchPages" onClick={handleSubmit}>Go to favorites </button>
  </div>
</header>

    
  );
}

export default Favorites;
