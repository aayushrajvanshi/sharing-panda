import React, { Component } from 'react';

class TrendFilter extends Component {
    render() {
        return (
            <div>
                <ul className="trend-filter">
                    <li>Trending</li>
                    <li>Most Active</li>
                    <li>Ending Soon</li>
                    <li>Most Funded</li>
                    <li>Ended</li>
                </ul>
            </div>
        );
    }
}

export default TrendFilter;