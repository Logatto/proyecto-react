import React from 'react';
import PlayList from '../../playlist/components/playlist'
import './category.css'


function Category (props){
    const playlists = props.playlist;
    
    return (
        <div className="Category">
            <p className="Category-description">{props.description}</p>
            <h2 className="Category-title">{props.title}</h2>
            <PlayList 
                playlist={playlists}
            />
        </div>
    )
}

export default Category;