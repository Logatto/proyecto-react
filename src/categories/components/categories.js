import React from 'react';
// import PlayList from '../../playlist/components/playlist'
import Category from './category'
import './categories.css'

import Search from '../../widgets/containers/search';


function Categories (props){
    // console.log("CATE",props.categories);
    const categories = props.categories;
    
    return (
        <div className="Categories">
            <Search/>
            {
            categories.map((item)=>{
                return <Category 
                        {...item}
                        key={item.id}
                        handleOpenModal={props.handleOpenModal}
                        />
                }) 
            }
        </div>
    )
}

export default Categories;