import React, { Component } from 'react';
import * as firebase from 'firebase';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';

class Home extends Component {
    render() {
        return (
            <div className="uk-slidenav-position uk-responsive-height" data-uk-slideshow>
                <ul className="uk-slideshow ">
                    <li><img src={img1} alt="" /></li>
                    <li><img src={img2} alt="" /></li>
                    <li><img src={img3} alt="" /></li>
                    <li><img src={img4} alt="" /></li>
                    <li><img src={img5} alt="" /></li>
                </ul>
                <a href="" className="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"></a>
                <a href="" className="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"></a>
                <ul className="uk-dotnav uk-dotnav-contrast uk-position-bottom uk-flex-center">
                    <li data-uk-slideshow-item="0"><a href=""></a></li>
                    <li data-uk-slideshow-item="1"><a href=""></a></li>
                    <li data-uk-slideshow-item="2"><a href=""></a></li>
                    <li data-uk-slideshow-item="3"><a href=""></a></li>
                    <li data-uk-slideshow-item="4"><a href=""></a></li>
                </ul>
            </div>

        );
    }
}

export default Home;