import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        return (
            <header className="topbar">
                <div className="uk-container">
                    <nav className="uk-navbar-container" data-uk-navbar>
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                <li><a href="#">Call us : +91 9997064005</a></li>
                            </ul>
                        </div>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google"></i></a></li>
                                <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default TopBar;