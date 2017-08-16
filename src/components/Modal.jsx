import React, { Component } from 'react';
import classNames from 'classnames';

class Modal extends Component {
    componentWillReceiveProps(nextProps) {
        // console.log('this.props', this.props);
        // console.log('nextProps', nextProps);
        if (nextProps.isOpen) {
            $("html").css('overflowY', 'hidden');
            $("body").css('overflowY', 'scroll');
        } else {
            $("html").css('overflowY', '');
            $("body").css('overflowY', '');
        }
    }
    render() {
        let modalStyle = {}

        if (!this.props.isOpen)
            return null;

        if (this.props.style) {
            for (let key in this.props.style) {
                modalStyle[key] = this.props.style[key]
            }
        }

        return (
            <div>
                <div className="modal" onClick={this.props.onClose} >
                </div>
                <div className="modal-dialog" style={modalStyle}>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;