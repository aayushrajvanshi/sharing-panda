import React, { Component } from 'react';

class Sorter extends Component {
    render() {
        return (
            <div>
                <div data-uk-form-custom="target: > * > span:first">
                    <select>
                        <option value="">Please select...</option>
                        <option value="1">Popular</option>
                        <option value="2">Fund Raised</option>
                    </select>
                    <button className="uk-button uk-button-default" type="button" tabindex="-1">
                        <span></span>
                        <span data-uk-icon="icon: chevron-down"></span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Sorter;