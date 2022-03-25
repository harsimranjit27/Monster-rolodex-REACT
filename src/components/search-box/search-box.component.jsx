import './search-box.styles.css'

const SearchBox = (props) => {
    const { onChangeHandler, placeholder } = props;
    return (
        <div>
            <input
                className={`search-box ${props.className}`}
                type={props.type}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </div>
    )
}
export default SearchBox;