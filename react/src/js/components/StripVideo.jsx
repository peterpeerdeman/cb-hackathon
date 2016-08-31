'use strict';

import { Component, PropTypes } from 'react';

export default class StripVideo extends Component {
    render() {
        return (
            <div className="cb-strip">
                Hello, world! I am a videostrip.
            </div>
        );
    }
};

Kenteken.propTypes = {
    variable: PropTypes.number.String
};
