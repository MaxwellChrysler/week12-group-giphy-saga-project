import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './HomePage.css'

function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory()

  const [search, setSearch] = useState("");

  const gifReducer = useSelector((store) => store.gifs);

  const apiSearch = (event) => {
    event.preventDefault();
    console.log("Search is:", search);
    dispatch({ type: "FETCH_API", payload: search });
    setSearch("");
  };

  const addFavorite = () => {
    dispatch({
      type: "POST_IMAGES",
      payload: gifs[i].data.data.images.original.url,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/favorites')
  }

  return (
<div>
    <div className="container" >
  <div className="center">
    <button className="switchPages" onClick={handleSubmit}>Go to favorites </button>
  </div>

    
    
      <h1>Home Page</h1>
       
      <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                    <a href="#">Funny</a>
                    <a href="#">NSFW</a>
                    <a href="#">Happy</a>
                </div>
            </div>
            <form onSubmit={apiSearch}>
                <input
                    required
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {gifReducer.map((gif, i) => (
                    <div className="image" key={i}>
                        <img src={gif.images.fixed_height.url}></img>

                        <form>
                            <button className="favorite" onSubmit={(event) => { addFavorite }}>Favorite</button>
                        </form>
                    </div>
                ))}
            </div>
            </div>
            </div>
    );
}

export default HomePage;