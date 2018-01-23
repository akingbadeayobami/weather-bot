import React, { Component } from 'react';
import {date_format} from '../../utils';

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
                        <small className=" text-muted"><span className="glyphicon glyphicon-time"></span>{date_format(created_at)}</small>
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




export default MyMessageBox;
