import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Favorites() {
  const dispatch = useDispatch();

  const favoriteList = useSelector((store) => store.favoriteList);
console.log('oh hi mark');
  useEffect(() => {
    dispatch({ type: "FETCH_IMAGES" });
  }, []);

  return (
    <ul>
      {/* {favoriteList.map((favorite,i) =>{
        return(
           
            <FavoritesItem key = {i} favorite={favorite}/>
            
            );
        
    })} */}
    </ul>
  );
}

export default Favorites;
