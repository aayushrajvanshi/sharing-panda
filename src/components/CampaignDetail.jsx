import React, { Component } from 'react';

class CampaignDetail extends Component {
    render() {
        var { title, campaigner, description } = this.props.fundraiser;
        return (
            <div className="uk-section uk-section-muted" >
                <div className="uk-container">
                    <h3 className="uk-margin-small">{title}</h3>
                    <h6 className="uk-margin-small"> by {campaigner}</h6>
                    <div className="uk-grid-small uk-text-center uk-grid-match" data-uk-grid>
                        <div className="uk-width-2-3@m">
                            <div className="uk-tile uk-tile-default uk-visible@m">
                                <div className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'backgroundImage': 'url(https://unsplash.it/500/600)' }}>
                                    <p className="uk-h4">Cover</p>
                                </div>
                            </div>
                            <div className="uk-tile uk-tile-default uk-padding-remove uk-hidden@m">
                                <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" style={{ 'backgroundImage': 'url(https://unsplash.it/500/600)' }}>
                                    <p className="uk-h4">Cover</p>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-1-3@m uk-visible@m">
                            <div className="uk-tile uk-tile-default ">
                                <button className="uk-button uk-button-primary uk-width-1-1">Contribute Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="uk-grid-small uk-grid-match " data-uk-grid>
                        <div className="uk-width-2-3@m uk-visible@m">
                            <div className="uk-tile uk-tile-default">
                                <ul data-uk-tab data-uk-switcher="animation: uk-animation-fade">
                                    <li><a href="#">Story</a></li>
                                    <li><a href="#">Campaigner</a></li>
                                    <li><a href="#">Updates</a></li>
                                    <li><a href="#">Comments</a></li>
                                </ul>

                                <ul className="uk-switcher uk-margin">
                                    <li>{description}</li>
                                    <li>
                                        <img className="uk-border-circle" src="https://unsplash.it/80" width="200" height="200" alt="Border circle" />
                                    </li>
                                    <li>
                                        <div className="uk-child-width-1-1@s uk-grid-collapse uk-text-center" data-uk-grid>
                                            <div>
                                                <div className="uk-tile uk-tile-primary">
                                                    <p className="uk-h4">In qui cillum ex dolor in ea elit dolor amet proident adipisicing incididunt occaecat et. Qui veniam cillum in laborum fugiat adipisicing nisi. Exercitation ex culpa pariatur nisi occaecat aliquip dolor excepteur ipsum.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="uk-tile uk-tile-muted">
                                                    <p className="uk-h4">Aliqua proident qui eu sint. Eu dolore do ullamco sit et do laborum velit sit laborum ea. Enim cillum culpa laborum nulla pariatur. Deserunt eu laboris dolor irure in. Voluptate sit excepteur nulla mollit do culpa cupidatat minim eu laborum pariatur. Eu dolore aliquip sit do duis minim eu mollit magna velit labore eu adipisicing. Eiusmod voluptate est nostrud est eiusmod adipisicing elit.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="uk-tile uk-tile-primary">
                                                    <p className="uk-h4">Qui amet fugiat aute duis. Nostrud ea aute velit ipsum minim dolor id ipsum cillum anim ullamco do consequat reprehenderit. Deserunt qui nulla dolore adipisicing dolor esse cupidatat tempor dolor quis cupidatat in. In ut dolor minim proident velit veniam ullamco.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="uk-tile uk-tile-muted">
                                                    <p className="uk-h4">Labore magna laboris amet eu sint excepteur nostrud labore. Ut fugiat nulla labore voluptate adipisicing culpa. Lorem reprehenderit dolore cupidatat cillum cillum nisi. Cillum velit dolor nisi ut aute anim nisi nostrud in quis excepteur quis. Voluptate aliqua veniam non eu ea culpa aute id ullamco irure nostrud officia eiusmod. Adipisicing magna nostrud Lorem sunt dolor. Officia cillum nulla reprehenderit ad magna qui veniam non nisi tempor labore.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <ul className="uk-comment-list">
                                            <li>
                                                <article className="uk-comment uk-visible-toggle">
                                                    <header className="uk-comment-header uk-position-relative">
                                                        <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                                                            <div className="uk-width-auto">
                                                                <img className="uk-comment-avatar" src="https://unsplash.it/80" width="80" height="80" alt="" />
                                                            </div>
                                                            <div className="uk-width-expand">
                                                                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                                                                <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="uk-position-top-right uk-position-small uk-hidden-hover"><a className="uk-link-muted" href="#">Reply</a></div>
                                                    </header>
                                                    <div className="uk-comment-body">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                    </div>
                                                </article>
                                                <ul>
                                                    <li>
                                                        <article className="uk-comment uk-comment-primary uk-visible-toggle">
                                                            <header className="uk-comment-header uk-position-relative">
                                                                <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                                                                    <div className="uk-width-auto">
                                                                        <img className="uk-comment-avatar" src="https://unsplash.it/80" width="80" height="80" alt="" />
                                                                    </div>
                                                                    <div className="uk-width-expand">
                                                                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                                                                        <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                                                    </div>
                                                                </div>
                                                                <div className="uk-position-top-right uk-position-small uk-hidden-hover"><a className="uk-link-muted" href="#">Reply</a></div>
                                                            </header>
                                                            <div className="uk-comment-body">
                                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                            </div>
                                                        </article>
                                                    </li>
                                                    <li>
                                                        <article className="uk-comment uk-comment-primary uk-visible-toggle">
                                                            <header className="uk-comment-header uk-position-relative">
                                                                <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                                                                    <div className="uk-width-auto">
                                                                        <img className="uk-comment-avatar" src="https://unsplash.it/80" width="80" height="80" alt="" />
                                                                    </div>
                                                                    <div className="uk-width-expand">
                                                                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                                                                        <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                                                    </div>
                                                                </div>
                                                                <div className="uk-position-top-right uk-position-small uk-hidden-hover"><a className="uk-link-muted" href="#">Reply</a></div>
                                                            </header>
                                                            <div className="uk-comment-body">
                                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <article className="uk-comment uk-visible-toggle">
                                                    <header className="uk-comment-header uk-position-relative">
                                                        <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                                                            <div className="uk-width-auto">
                                                                <img className="uk-comment-avatar" src="https://unsplash.it/80" width="80" height="80" alt="" />
                                                            </div>
                                                            <div className="uk-width-expand">
                                                                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                                                                <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="uk-position-top-right uk-position-small uk-hidden-hover"><a className="uk-link-muted" href="#">Reply</a></div>
                                                    </header>
                                                    <div className="uk-comment-body">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                    </div>
                                                </article>
                                                <ul>
                                                    <li>
                                                        <article className="uk-comment uk-comment-primary uk-visible-toggle">
                                                            <header className="uk-comment-header uk-position-relative">
                                                                <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                                                                    <div className="uk-width-auto">
                                                                        <img className="uk-comment-avatar" src="https://unsplash.it/80" width="80" height="80" alt="" />
                                                                    </div>
                                                                    <div className="uk-width-expand">
                                                                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                                                                        <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                                                    </div>
                                                                </div>
                                                                <div className="uk-position-top-right uk-position-small uk-hidden-hover"><a className="uk-link-muted" href="#">Reply</a></div>
                                                            </header>
                                                            <div className="uk-comment-body">
                                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="uk-width-2-3@m uk-hidden@m">
                            <div className="uk-tile uk-tile-default uk-padding-small">
                                <li>{description}</li>
                            </div>
                        </div>
                    </div>


                    <div className="uk-width-1-3@m uk-visible@m">
                        <div className="uk-tile uk-tile-default ">
                            <ul className="uk-comment-list">
                                <li>
                                    <article className="uk-comment uk-visible-toggle">
                                        <header className="uk-comment-header uk-position-relative">
                                            <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-auto">
                                                    <img className="uk-comment-avatar" src="https://unsplash.it/80" width="80" height="80" alt="" />
                                                </div>
                                                <div className="uk-width-expand">
                                                    <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                                                    <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                                </div>
                                            </div>
                                            <div className="uk-position-top-right uk-position-small uk-hidden-hover"><a className="uk-link-muted" href="#">Reply</a></div>
                                        </header>
                                        <div className="uk-comment-body">
                                            <p>Lorem ipsum dolor sit amet. Eiusmod et magna quis amet est deserunt dolore ea occaecat.</p>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article className="uk-comment uk-visible-toggle">
                                        <header className="uk-comment-header uk-position-relative">
                                            <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-auto">
                                                    <img className="uk-comment-avatar" src="https://unsplash.it/80" width="80" height="80" alt="" />
                                                </div>
                                                <div className="uk-width-expand">
                                                    <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                                                    <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                                </div>
                                            </div>
                                            <div className="uk-position-top-right uk-position-small uk-hidden-hover"><a className="uk-link-muted" href="#">Reply</a></div>
                                        </header>
                                        <div className="uk-comment-body">
                                            <p>Lorem ipsum dolor sit amet. Eiusmod et magna quis amet est deserunt dolore ea occaecat.</p>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article className="uk-comment uk-visible-toggle">
                                        <header className="uk-comment-header uk-position-relative">
                                            <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-auto">
                                                    <img className="uk-comment-avatar" src="https://unsplash.it/80" width="80" height="80" alt="" />
                                                </div>
                                                <div className="uk-width-expand">
                                                    <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                                                    <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                                </div>
                                            </div>
                                            <div className="uk-position-top-right uk-position-small uk-hidden-hover"><a className="uk-link-muted" href="#">Reply</a></div>
                                        </header>
                                        <div className="uk-comment-body">
                                            <p>Lorem ipsum dolor sit amet. Eiusmod et magna quis amet est deserunt dolore ea occaecat.</p>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                    <article className="uk-comment uk-visible-toggle">
                                        <header className="uk-comment-header uk-position-relative">
                                            <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                                                <div className="uk-width-auto">
                                                    <img className="uk-comment-avatar" src="https://unsplash.it/80" width="80" height="80" alt="" />
                                                </div>
                                                <div className="uk-width-expand">
                                                    <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                                                    <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                                </div>
                                            </div>
                                            <div className="uk-position-top-right uk-position-small uk-hidden-hover"><a className="uk-link-muted" href="#">Reply</a></div>
                                        </header>
                                        <div className="uk-comment-body">
                                            <p>Lorem ipsum dolor sit Occaecat velit fugiat esse esse adipisicing do exercitation ad. amet.</p>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default CampaignDetail;