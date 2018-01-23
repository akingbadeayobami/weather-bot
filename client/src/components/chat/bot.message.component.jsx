import React, { Component } from 'react';

class BotMessageBox extends Component {

    render() {
        return (

            <li className="left clearfix"><span className="chat-img pull-left">
                <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" className="img-circle" />
            </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <strong className="primary-font">Bot</strong> <small className="pull-right text-muted">
                            <span className="glyphicon glyphicon-time"></span>12 mins ago</small>
                    </div>
                    <p>
                        {this.props.message.message}
                    </p>
                </div>
            </li>
        )
    }




}



export default BotMessageBox;
