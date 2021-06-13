import React from 'react';
import Button from "./Button";
const Search = (props) => {
    const style = {
        display: "flex",
        width: "366px",
        height: "50px",
        // backgroundColor: "#6ac3f3",
        borderRadius: "5px",
        overflow: "hidden"
    }
    const input = {
        width: "280px",
        height: "48px",
        border: "1px solid #6ac3f3",
        borderRadius: "5px 0 0 5px",
        color: "grey",
        fontSize: "14px",
        paddingLeft: "15px"
    }
    const button = {
        borderRadius: "0 5px 5px 0",
        width: "40px"
    }

    return (
        <div style={{...style, ...props.style}}>
            <input
                style={{...input, ...props.inputStyle}}
                type="text"
                placeholder={props.placeholder ? props.placeholder : "Please input keywords to search"}
                value={props.value}
                onChange={(e) => {
                    props.onChange(e.target.value)
                }}
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        props.onClick()
                    }
                }}
            />
            <Button
                style={{...button, ...props.buttonStyle}}
                onClick={props.onClick}
            >{props.title ? props.title : 'Search'}</Button>
        </div>
    );
}

export default Search;
