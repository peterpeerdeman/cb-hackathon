'use strict';

import { Component, PropTypes } from 'react';

export default class Kenteken extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            kenteken: undefined
        };
    }
    render() {
        switch (this.state.step) {
            case 1:
                return <KentekenFields onCompleted={ this.nextStep } />;
            case 2:
                return <span>Result state: { this.state.kenteken } </span>;
            }
    }
    nextStep(data) {
        this.setState({
            kenteken: data, 
            step: this.state.step += 1
        });
    }
};

Kenteken.propTypes = {
    //variable: PropTypes.number.isRequired
};
