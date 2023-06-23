

function SearchBox(props) {


    return (
        <input 
            className={props.className} 
            type='search' 
            placeholder={props.placeHolder} 
            onChange={props.onChangeHandler}
        />
    );
}

export default SearchBox;