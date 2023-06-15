import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

function HomePage() {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    const gifReducer = useSelector((store) => store.gifs);

    const apiSearch = (event) => {
        event.preventDefault();
        console.log("Search is:", search);
        dispatch({ type: "FETCH_API", payload: search });
        setSearch("");
    };

    const addFavorite = (event) => {
        console.log('favorite is: ', event.target.value)
        dispatch({
            type: "POST_IMAGES",
            payload: event.target.value
        });
    };

    return (
        <>
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
        </>
    );
}

export default HomePage;