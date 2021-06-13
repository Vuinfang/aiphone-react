import React, {useState} from 'react';
import logo1 from "../assets/image/logo1.png";
import logo2 from "../assets/image/logo2.png";
import Search from "./Search";
const Header = (props) => {
    const [keywords, setKeywords] = useState("")
    const onClick = () => {
        alert(keywords)
    }
    return (
        <div className="top w">
            <div className="logo1">
                <img src={logo1} alt="Error" width="50px"/>
            </div>
            <div className="logo2">
                <img src={logo2} alt="Error" width="160px"/>
            </div>
            <div className="nav_top">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Phones</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Sale</a></li>
                </ul>
            </div>
            <Search
                onChange={setKeywords}
                value={keywords}
                onClick={onClick}
            />
        </div>
    );
}

export default Header;
