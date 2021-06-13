import React, {useState} from 'react';
import demo3 from "../assets/image/demo3.png";
import demoPic from "../assets/image/demo-pic.jpg";
import Card from "./Card";

const SecondBox = (props) => {
    const [keywords, setKeywords] = useState("")

    return (
        <div className="second_box w" style={{marginBottom: "20px"}}>
            <Card
                hover
                  // img={demoPic}
                  title={"Sale"}
                  description={'up to 20% off on all brands'}
            />
            <Card
                hover
                // img={demoPic}
                title={"Sale"}
                description={'up to 20% off on all brands'}
            />
            <Card
                hover
                // img={demoPic}
                title={"Sale"}
                description={'up to 20% off on all brands'}
            />
            <Card
                hover
                // img={demoPic}
                title={"Sale"}
                description={'up to 20% off on all brands'}
            />

        </div>
    );
}

export default SecondBox;
