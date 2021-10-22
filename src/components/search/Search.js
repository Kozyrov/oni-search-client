import React, { useState } from "react";
import { searchByTitle } from "./searchAPI";
import styles from "./results/results.module.scss";
import Results from "./results/Results";

const Search = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const results = await searchByTitle(value);
        setResults(results);
    }

    const handleInput = (event) => {
        setValue(event.currentTarget.value);
    }

    return (
        <div id={styles.search_container}>
            <form className={styles.search_field} onSubmit={handleSubmit}>
                <label>Search for anime by title:</label>
                <input 
                    type="search"
                    id="title-search-input"
                    placeholder="What Anime are you looking for?"
                    aria-label="Search for anime based on title"
                    value={value}
                    onInput={handleInput}
                />
            </form>
            {<Results searchResults={results}/>}
        </div>
    );
}

export default Search;
