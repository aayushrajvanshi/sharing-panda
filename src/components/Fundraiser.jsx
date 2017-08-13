import React from 'react';
import { Link } from 'react-router-dom';
import img1 from 'Images/img5.jpg';

const Fundraiser = ({ id, title, type, category, campaigner, description, days_left, goal_amount, supporters }) => {
    return (
        <div>
            <div className="campaign-card">
                <div className="card-image">
                    <Link key={id} to={{ pathname: `/fundraiser/${id}` }}>
                        <div className="uk-background-cover uk-height-medium" style={{ 'backgroundImage': 'url(' + img1 + ')' }}>
                        </div>
                    </Link>
                    <div className="category">
                        <span>{category}</span>
                    </div>
                </div>
                <div className="social">
                    <span><i className="fa fa-facebook"></i></span>
                    <span><i className="fa fa-whatsapp"></i></span>
                </div>
                <div className="campaign-info">
                    <p className="uk-text-truncate">{title}</p>
                    <span>by</span>
                    <span>{campaigner}</span>
                    <p className="uk-text-truncate">{description}</p>
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
        </div >
    );
}
export default Fundraiser;