import React from 'react'
import './search.css'

function Search(props){

    return (
        <form 
        onSubmit={props.handleSubmit}
        className="Serch">
            <input
                ref={props.setRef} 
                type="text"
                placeholder="Search video"
                className="Search-input"
                name="search"
            />
        </form>
    )
}

export default Search;