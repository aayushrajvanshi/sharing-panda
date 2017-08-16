import React from 'react';
// import Modal from 'Components/Modal.jsx';
import FAQ from 'Components/FAQ.jsx';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
        width: '400px'
    }
};

class TestModal extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
        $("html").css('overflowY', 'hidden');
        $("body").css('overflowY', 'scroll');
    }
    handleCloseModal = () => {
        this.setState({ showModal: false });
        $("html").css('overflowY', '');
        $("body").css('overflowY', '');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Trigger Modal</button>
                <FAQ />
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="modal-dialog"
                    style={customStyles}
                    overlayClassName="modal-overlay"
                >
                    <form id="login-form" className="uk-form-stacked">
                        <div className="uk-margin-small">
                            <div className="uk-form-controls">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                    <input className="uk-input uk-form-width-large" id="form-stacked-text" type="text" placeholder="Email Id" />
                                </div>
                            </div>
                        </div>
                        <div className="uk-margin-small">
                            <div className="uk-form-controls">
                                <div className="uk-inline">
                                    <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                                    <input className="uk-input uk-form-width-large" id="form-stacked-text" type="password" placeholder="Password" />
                                </div>
                            </div>
                        </div>
                        <div className="uk-margin-small">
                            <div className="uk-form-controls">
                                <button className="uk-button uk-button-large uk-button-primary uk-width-1-1" type="button" onClick={this.onEmailLogin}>SIGN IN</button>
                            </div>
                        </div>
                        <div className="uk-clearfix">
                            <div className="uk-float-left">
                                <label style={{ 'fontSize': '0.7rem' }}>Forgot Details?</label>
                            </div>
                            <div className="uk-float-right">
                                <label style={{ 'fontSize': '0.7rem' }}><input className="uk-checkbox" type="checkbox" /> Remember me</label>
                            </div>
                        </div>
                        <hr className="uk-divider-icon" />
                        <div className="uk-margin-small">
                            <div className="uk-form-controls">
                                <button id="google-button" type="button" className="uk-visible@s uk-button uk-button-large uk-button-primary uk-width-1-1" onClick={this.onGoogleLogin}><span className="uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: google"></span>Login with Google</button>
                                <button id="google-button" type="button" className="uk-hidden@s uk-button uk-button-large uk-button-primary uk-width-1-1" onClick={this.onGoogleLogin}><span className="uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: google"></span>Google</button>
                            </div>
                        </div>
                        <div className="uk-margin-small">
                            <div className="uk-form-controls">
                                <button id="facebook-button" type="button" className="uk-visible@s uk-button uk-button-large uk-button-primary uk-width-1-1" onClick={this.onFacebookLogin}> <span className="uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: facebook"></span>Login with Facebook</button>
                                <button id="facebook-button" type="button" className="uk-hidden@s uk-button uk-button-large uk-button-primary uk-width-1-1" onClick={this.onFacebookLogin}> <span className="uk-margin-small-right" style={{ 'color': 'white' }} data-uk-icon="icon: facebook"></span>Facebook</button>
                            </div>
                        </div>
                        <p style={{ 'fontSize': '0.7rem', 'marginBottom': '0px' }}>I don't have an account yet. <span className="uk-link" style={{ 'fontSize': '0.7rem', 'marginBottom': '0px' }} data-uk-toggle="target: #signup-modal">Sign Up</span> </p>
                    </form>
                </ReactModal>
            </div>
        );
    }
}

export default TestModal;
