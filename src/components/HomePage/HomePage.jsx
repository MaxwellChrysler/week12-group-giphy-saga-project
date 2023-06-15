import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react"

function HomePage() {

    const dispatch = useDispatch();

    const [search, setSearch] = useState('')

    const gifs = useSelector((store) => store.gifs);

    const apiSearch = (event) => {
        event.preventDefault();
        dispatch({ type: 'FETCH_API', payload: search });
    }

    const addFavorite = () => {
        dispatch({ type: 'POST_IMAGES', payload: gifs[i].data.data.images.original.url })
    }

    return (
        <>
            <h1>Home Page</h1>
            <form>
                <input
                    required
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button onSubmit={apiSearch}>Search</button>
            </form>
            {gifs.map((gif, i) => (
                <div key={i}>
                    <img src={gif.data.data.images.original.url}></img>
                    <button onClick={addFavorite}>Favorite</button>
                </div>
            ))}
        </>
    )
}

export default HomePage