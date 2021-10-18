import React, { useState } from "react";
import { searchByTitle } from "./searchAPI";

const Search = () => {
    const [value, setValue] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await searchByTitle(value);
    }

    const handleInput = (event) => {
        setValue(event.currentTarget.value);
    }

    return (
        <form className="search-field" onSubmit={handleSubmit}>
            <label>Search for anime by title:</label>
            <input 
                type="search"
                id="title-search-input"
                placeholder="What Anime are you looking for?"
                aria-label="Search for anime based on title"
                value={value}
                onInput={handleInput}
            ></input>
        </form>
    );
}

export default Search;
