import React, { Component } from 'react';
import FAQ from 'Components/FAQ';

import Dock from 'react-dock';

class SideDock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            size: 0.335030549898167
        }
    }

    onVisibleChange = () => {
        this.setState({ isVisible: !this.state.isVisible })
    }

    onSizeChange = () => {
        this.setState({ size: window.height })
    }

    render() {
        let dockStyle = {
            color: 'blue'
        }
        let dimStyle = {
            color: 'blue'
        }
        var { isVisible, size } = this.state;

        return (
            <div>
                <label htmlFor="box"><input id="box" checked={this.state.isVisible} type="checkbox" onChange={this.onVisibleChange} />is Visible</label>
                <Dock onVisibleChange={this.onVisibleChange} onSizeChange={this.onSizeChange} position='right' fluid={true} size={size} dimMode="transparent" isVisible={this.state.isVisible} zIndex={99999999} dimStyle={{ background: "rgba(0, 0, 100, 0.2)" }} dockHiddenStyle={null}>
                    <div onClick={() => this.setState({ isVisible: !this.state.isVisible })}>X</div>
                </Dock>
            </div >
        );
    }
}

export default SideDock;