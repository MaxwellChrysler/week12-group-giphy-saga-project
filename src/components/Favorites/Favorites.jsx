import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Favorites() {
const dispatch = useDispatch();



  const favoriteList = useSelector((store) => store.favoriteList);

  useEffect(()=>{
    dispatch({ type: 'FETCH_IMAGES'});
  },[]);


//   const renderFavorites = () => {
//     dispatch({ type: FETCH_IMAGES, payload: {} });
//   };

  return (

  
   <ul>
    {favoriteList.map((favorite,i) =>{
        return(
           
            <FavoritesItem key = {i} favorite={favorite}/>
            
            );
        
    })}

    </ul>
  )

}


export default Favorites;
