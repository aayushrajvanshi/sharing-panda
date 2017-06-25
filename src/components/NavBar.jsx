import React, { Component } from 'react';

class NavBar extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('.menu-ham').click(function () {
                $(this).toggleClass('visible');
            });
        });
    }
    render() {
        return (
            <div className="uk-container">
                <header>
                    <ul className="cus-navbar">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">PRODUCTS</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">SALE</a></li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>
                    <div className="menu-ham">
                        <span></span>
                    </div>
                </header>
                <a href="https://web.whatsapp.com/send?text=https://www.google.com" target="_blank"><button className="uk-button uk-button-primary">Share via Whatsapp</button></a>
            </div>
        );
    };
}

export default NavBar;