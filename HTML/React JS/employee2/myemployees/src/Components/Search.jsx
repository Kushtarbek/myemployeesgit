import React from "react";
import "./Search.css"

const Search = (props) => {
    return (
        <div>
        <input className='search' placeholder="Search" value={props.value} onChange={props.getSearch} />
        <button className='select' >button</button>
        </div>
     );
 }
export default Search;