import { Component } from 'react'

class SearchBox extends Component {
    render(props) {
        const {onChangeHandler, placeholder} = this.props;
        return (
            <div>
                <input 
                    type={this.props.className}
                    placeholder={placeholder}
                    onChange = {onChangeHandler}
                />
            </div>
        )
    }
}

export default SearchBox;