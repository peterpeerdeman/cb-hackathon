'use strict';

import {Component, PropTypes } from 'react';
import {IntlProvider, FormattedMessage} from 'react-intl';
import request from 'superagent';

export default class StripVideo extends Component {
    constructor() {
        super();
        this.state = {
            translations: null,
        };
    }
    componentWillMount() {
        request.get('/translations/nl.json', (err, res) => {
            this.setState({
                translations: res.body,
            });
        });
    }
    render() {
        if (!this.state.translations) {
            return <p>loading...</p>;
        }

        var imageUrl = this.state.translations['striphero-background'];
        var divStyle = {
            backgroundImage: 'url(' + imageUrl + ')',
        };

        return (
            <IntlProvider locale="en" translations={this.state.translations}>
                <article className="cb-strip cb-strip-video">

                    <div className="video-cover" style={divStyle}>
                        <div className="container">
                            <h2 className="strong">
                                <FormattedMessage
                                    id="striphero-title"
                                    defaultMessage={`Hello fallback i18n string`}
                                />
                            </h2>
                            <p className="subheader">
                                <FormattedMessage
                                    id="striphero-clicktostart"
                                />
                            </p>

                            <div className="video-controls">
                                <a href="#start-video" className="play-button"><span className="cb-iconfont-play-button"></span></a>
                            </div>

                            <p className="footer">
                            <a href="">
                                <FormattedMessage
                                    id="striphero-body"
                                />
                            </a>
                            </p>
                        </div>
                    </div>

                    <div className="video-player ng-hide">
                        <a href="" className="stop-video"><span className="cb-iconfont-close"></span></a>
                    </div>

                </article>
            </IntlProvider>
        );
    }
};
