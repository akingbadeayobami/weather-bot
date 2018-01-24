import React, { Component } from 'react';
import {dateFormat} from '../../../../utils';
import PropTypes from 'prop-types';

class MyMessageBox extends Component {


    render() {

        const {
            message,
            created_at
        } = this.props.message;


        return (

            <li className="right clearfix"><span className="chat-img pull-right">
                <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" className="img-circle" />
            </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <small className=" text-muted"><span className="glyphicon glyphicon-time"></span>{dateFormat(created_at)}</small>
                        <strong className="pull-right primary-font">Me</strong>
                    </div>
                    <p>
                        {message}
                    </p>
                </div>
            </li>
        )
    }

}


MyMessageBox.propTypes = {
    message  : PropTypes.object
}

export default MyMessageBox;
