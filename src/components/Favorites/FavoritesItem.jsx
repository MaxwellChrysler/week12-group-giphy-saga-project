import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function FavoritesItem() {
  const dispatch = useDispatch();

  const renderFavorites = () => {
    dispatch({ type: FETCH_IMAGES, payload: {} });
  };

  return <h1>hellow world</h1>;
}

export default FavoritesItem;
