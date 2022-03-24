import { Component } from 'react'
import './search-box.styles.css'

class SearchBox extends Component {
    render(props) {
        const {onChangeHandler, placeholder} = this.props;
        return (
            <div>
                <input 
                    className={`search-box ${this.props.className}`}
                    type={this.props.className}
                    placeholder={placeholder}
                    onChange = {onChangeHandler}
                />
            </div>
        )
    }
}

export default SearchBox;