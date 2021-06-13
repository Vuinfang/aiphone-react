import React from 'react';

const Button = (props) => {
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6ac3f3",
        padding: "0 10px",
        height: "100%",
        lineHeight: "100%",
        border: "none",
        color: "white",
        textAlign: "center",
        textDecoration:" none",
        cursor:" pointer",
        fontSize: "16px",
        borderRadius: "15px",
}
    return (
           <div
               className={props.className}
               style={{...style, ...props.style}}
               onClick={props.onClick}
           >{props.children}</div>
    );
}

export default Button;
