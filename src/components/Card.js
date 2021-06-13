import React, {useState} from 'react';
import demo3 from "../assets/image/demo3.png";

const Card = (props) => {
    const [hoverState, setHoverState] = useState(false)
    const toggleHover = () => {
        setHoverState(!hoverState)
    }
    const style={
        display: 'flex',
        flexDirection: 'column',
        width: "296px",
        height: "285px",
        backgroundImage: `url(${props.img ? props.img: demo3})`,
        backgroundSize: 'cover',
        borderRadius: "5px",
        paddingTop: '10px'
    }
    const style2 ={
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        borderRadius: "5px",
        marginLeft: "14px",
        marginBottom: "14px",
        overflow: 'hidden'
    }
    const imgStyle2 = {
        width: "217px",
        height: "265px",
        backgroundImage: `url(${props.img ? props.img: null})`,
        backgroundSize: 'contain',
        backgroundPosition: "center center",
        backgroundRepeat: 'no-repeat'
    }
    const notHover = {
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s cubic-bezier(0.47, 0, 0.745, 0.715), border 0.3s linear 0.1s"
    }
    const hover = {
        cursor: "pointer",
        boxShadow: '0 10px 50px rgba(51, 51, 51, 0.25)',
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s cubic-bezier(0.47, 0, 0.745, 0.715), border 0.3s linear 0.1s",
        webkitTransform: 'translateY(-10px)',
        mozTransform: 'translateY(-10px)',
        transform: 'translateY(-10px)'
    }
    const titleStyle={
        fontSize: '20px',
        fontWeight: 700
        // color: "rgb(4, 87, 136)"
    }
    const descriptionStyle={
        color: "rgb(4, 87, 136)"
    }
    const hoverStyle = props.hover? (hoverState ? hover : notHover) : null
    return (

            props.style2 ?
                <div
                    style={{...style2,...hoverStyle, ...props.cardStyle2}}
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                >
                    <div style={{...imgStyle2, ...props.cardStyle2}}></div>
                    <span style={{...titleStyle, ...props.titleStyle2}}>{props.title ? props.title : 'Title'}</span>
                    <span
                        style={{...descriptionStyle, ...props.descriptionStyle2}}>{props.description ? props.description : null}</span>

                </div>
                :
                <div
                    onClick={props.onClick}
                    style={{...style, ...hoverStyle, ...props.cardStyle}}
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                >
                    <span style={{...titleStyle, ...props.titleStyle}}>{props.title ? props.title : 'Title'}</span>
                    <span
                        style={{...descriptionStyle, ...props.descriptionStyle}}>{props.description ? props.description : 'Description'}</span>
                </div>

    );
}

export default Card;
