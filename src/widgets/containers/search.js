import React, {Component} from 'react';
import Search from '../components/search';

class SearchContainer extends Component{
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("SUBMIT",this.input.value);
    }

    setInputRef = element =>{
        this.input = element;
    }

    render (){
        return (
            <Search
            setRef={this.setInputRef}
            handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default SearchContainer;