import React, { Component, PropTypes } from 'react';
import img1 from './../images/img5.jpg';

var Fundraiser = (props) => {
    var { title, type, campaigner, description, days_left, goal_amount, supporters } = props;
    return (
        <div className="campaign-card">
            <div className="card-image">
                <div className="uk-background-cover uk-height-medium" style={{ 'backgroundImage': 'url(' + img1 + ')' }}>
                </div>
                <div className="category">
                    <span>{type}</span>
                </div>
            </div>
            <div className="social">
                <span><i className="fa fa-facebook"></i></span>
                <span><i className="fa fa-whatsapp"></i></span>
            </div>
            <div className="campaign-info">
                <p>{title}</p>
                <span>by</span>
                <span>{campaigner}</span>
                <p>{description}</p>
            </div>
            <div className="campaign-progress">
                <span>
                    <p>Raised </p>
                    <i className="fa fa-inr"></i>
                    <p> 5,60,400</p>
                </span>
                <span><p>56%</p></span>
                <progress id="progressbar" className="uk-progress" value="55" max="100"></progress>
            </div>
            <hr />
            <div className="campaign-status">
                <div className="goal">
                    <i className="fa fa-inr"></i>
                    <span>{goal_amount}</span>
                    <p>goal</p>
                </div>
                <div className="supporter">
                    <i className="fa fa-heart"></i>
                    <span>{supporters}</span>
                    <p>supporters</p>
                </div>
                <div className="days">
                    <i className="fa fa-clock-o"></i>
                    <span>{days_left}</span>
                    <p>days left</p>
                </div>
            </div>
        </div >
    );
}

export default Fundraiser;