import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {
    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;
        handleCheckboxChange(label);
    }

    render() {
        const { label, count, isChecked } = this.props;
        return (
            <div>
                <label style={{ 'fontSize': '0.9rem' }}><input className="uk-checkbox"
                    type="checkbox"
                    value={label}
                    checked={isChecked}
                    onChange={this.toggleCheckboxChange}
                /> {label}({count})
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;