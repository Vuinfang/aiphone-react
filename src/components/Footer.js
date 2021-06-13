import React from 'react';
import logo1 from "../assets/image/logo1.png";

const Footer = (props) => {

    return (
        <div className="footer">
            <div className="w">
                <div className="copyright">
                    <img src={logo1}/> <br/><br/>
                    <span>AI Phone</span>
                    <p>Copyright © 2021 AI phone Inc. All rights reserved.</p>
                </div>
                <div className="links">
                    <dl>
                        <dt>About</dt>
                        <dd>Our shop</dd>
                        <dd>Our team</dd>
                        <dd>Job opportunities</dd>
                        <dd>Contact us</dd>
                        <dd>Events</dd>
                    </dl>

                    <dl>
                        <dt>About</dt>
                        <dd>Our shop</dd>
                        <dd>Our team</dd>
                        <dd>Job opportunities</dd>
                        <dd>Contact us</dd>
                        <dd>Events</dd>
                    </dl>
                    <dl>
                        <dt>About</dt>
                        <dd>Our shop</dd>
                        <dd>Our team</dd>
                        <dd>Job opportunities</dd>
                        <dd>Contact us</dd>
                        <dd>Events</dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default Footer;
