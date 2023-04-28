import React from "react";
import {MdSearch} from "react-icons/md";

const SearchBar = () => {
    return(
    <div className="search-bar">
        <MdSearch className="search-icons" size="1.3em" />
        <input type="text" placeholder="Type to search..." />
        
    </div>)
}

export default SearchBar;