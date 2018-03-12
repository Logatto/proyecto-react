import React from 'react';
import Media from './media'
import './playlist.css'

// import Play from "../../icons/components/play";
// import FullScreen from '../../icons/components/full-screen';
// import Pause from '../../icons/components/pause';
// import Volume from '../../icons/components/volume';


function PlayList(props){
    const playlist = props.playlist

    return (
        <div className="Playlist">
            <h3>{props.description}</h3>
            {/* <Volume
                size={50}
                color="red"
            /> */}
            { 
                playlist.map((item)=>{
                return <Media 
                        {...item}
                        // title={item.title} 
                        key={item.id}
                        />
                })    
            }  
        </div>
    )
    

}

export default PlayList;