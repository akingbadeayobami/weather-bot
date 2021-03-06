import React, { Component } from 'react';
import {dateFormat} from '../../../../utils';
import PropTypes from 'prop-types';


class BotMessageBox extends Component {

    render() {
        const {
            message,
            created_at
        } = this.props.message;
        return (

            <li className="left clearfix"><span className="chat-img pull-left">
                <img src="http://placehold.it/50/55C1E7/fff&text=B" alt="User Avatar" className="img-circle" />
            </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <strong className="primary-font">Bot</strong> <small className="pull-right text-muted">
                            <span className="glyphicon glyphicon-time"></span>{dateFormat(created_at)}</small>
                    </div>
                    <p>{message}</p>
                </div>
            </li>
        )
    }
 
}

BotMessageBox.propTypes = {
    message  : PropTypes.object
}


export default BotMessageBox;
