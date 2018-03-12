import React from 'react';
// import PlayList from '../../playlist/components/playlist'
import Category from './category'
import './categories.css'


function Categories (props){
    // console.log("CATE",props.categories);
    const categories = props.categories;
    
    return (
        <div className="Categories">
            {
            categories.map((item)=>{
                return <Category 
                        {...item}
                        
                        key={item.id}
                        />
                }) 
            }
        </div>
    )
}

export default Categories;