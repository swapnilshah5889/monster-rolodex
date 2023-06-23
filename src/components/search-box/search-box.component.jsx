import './search-box.styles.css'

function SearchBox(props) {


    return (
        <input 
            className= {`search-box ${props.className}`} 
            type='search' 
            placeholder={props.placeHolder} 
            onChange={props.onChangeHandler}
        />
    );
}

export default SearchBox;