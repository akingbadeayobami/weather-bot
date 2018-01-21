import React, { Component } from 'react';
import { getChat } from "../../actions/chat.actions";
import { connect } from "react-redux";

class Main extends Component {

    componentWillMount() {


    }
    render() {
        return ( 
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                               Chat
                          <div className="btn-group pull-right">
                                    <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                        End Chat
                                    </button>
                                    
                                </div>
                            </div>
                            <div className="chat-body panel-body">
                                <ul className="chat">
                                    <li className="left clearfix"><span className="chat-img pull-left">
                                        <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" className="img-circle" />
                                    </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font">Jack Sparrow</strong> <small className="pull-right text-muted">
                                                    <span className="glyphicon glyphicon-time"></span>12 mins ago</small>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                                    dolor, quis ullamcorper ligula sodales.
                                </p>
                                        </div>
                                    </li>
                                    <li className="right clearfix"><span className="chat-img pull-right">
                                        <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" className="img-circle" />
                                    </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <small className=" text-muted"><span className="glyphicon glyphicon-time"></span>13 mins ago</small>
                                                <strong className="pull-right primary-font">Bhaumik Patel</strong>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                                    dolor, quis ullamcorper ligula sodales.
                                </p>
                                        </div>
                                    </li>
                                    <li className="left clearfix"><span className="chat-img pull-left">
                                        <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" className="img-circle" />
                                    </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <strong className="primary-font">Jack Sparrow</strong> <small className="pull-right text-muted">
                                                    <span className="glyphicon glyphicon-time"></span>14 mins ago</small>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                                    dolor, quis ullamcorper ligula sodales.
                                </p>
                                        </div>
                                    </li>
                                    <li className="right clearfix"><span className="chat-img pull-right">
                                        <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" className="img-circle" />
                                    </span>
                                        <div className="chat-body clearfix">
                                            <div className="header">
                                                <small className=" text-muted"><span className="glyphicon glyphicon-time"></span>15 mins ago</small>
                                                <strong className="pull-right primary-font">Bhaumik Patel</strong>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare
                                    dolor, quis ullamcorper ligula sodales.
                                </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="panel-footer">
                                <div className="input-group">
                                    <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-warning btn-sm" id="btn-chat">
                                            Send</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           

        );
    }
}

const mapStateToProps = (state) => {
    return {
        chat: state.chat,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getChat: () => {
            dispatch(getChat());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
