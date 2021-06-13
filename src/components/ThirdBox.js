import React from 'react';
import phone from "../assets/image/phone.jpg";
import samsung from "../assets/image/samsung.jpg"
import Card from "./Card";

const ThirdBox = (props) => {

    return (
        <div className="third_box w">
            <div className="promotion radius_style">
                <h2>Make life better</h2>
            </div>
            <div className="phone">
                <Card
                    style2
                    hover
                    img={phone}
                />
                <Card
                    style2
                    hover
                    img={phone}
                />
                <Card
                    style2
                    hover
                    img={phone}
                />
                <Card
                    style2
                    hover
                    img={phone}
                />
                <Card
                    style2
                    hover
                    img={phone}
                />
                <Card
                    style2
                    hover
                    img={phone}
                />
                <Card
                    style2
                    hover
                    img={phone}
                />
                <Card
                    style2
                    hover
                    img={phone}
                />
            </div>
        </div>
    );
}

export default ThirdBox;
