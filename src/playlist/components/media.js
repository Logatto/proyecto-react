import React, {PureComponent} from 'react';
import propTypes from 'prop-types'
import './media.css'

class Media extends PureComponent{
    // state = {
    //     author:'Wbeimar Log'
    // }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         author: props.author
    //     }
    // }
    handleClick = (event)=>{

        console.log(this.props.title);
        // this.setState({
        //     author:'Ricardo',
        // })

    }

    render(){
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image"
                        src={this.props.cover}
                        alt=""
                        width={240}
                        height={160}
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover:propTypes.string,
    title:propTypes.string.isRequired,
    author:propTypes.string,
    type: propTypes.oneOf(['video','audio'])
}
export default Media;