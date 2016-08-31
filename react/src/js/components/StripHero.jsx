'use strict';

import { Component, PropTypes } from 'react';

export default class StripHero extends Component {
    render() {
        return (
                <div className="cb-strip">
                    Hello, world! I am a herostrip.
                </div>
        );
    }
};

Kenteken.propTypes = {
    variable: PropTypes.number.String
};
