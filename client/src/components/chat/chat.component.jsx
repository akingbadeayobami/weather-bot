import React, { Component } from 'react';
import { getLastChatMessages } from "../../actions/chat.actions";
import MyMessage from "./my.message.component";
import BotMessage from "./bot.message.component";
import { connect } from "react-redux";

class Main extends Component {

    componentWillMount() {

        this.props.getLastChatMessages();

    }

    newChat(){

        console.log("kiss me")

    }

    sendMessage(){

        console.log(this.refs.message.value);

    }

    render() {
        return ( 
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                               Chat  
                          <div className="btn-group pull-right">
                                    <button type="button" className="btn btn-default btn-xs" onClick={this.newChat.bind(this)}  >
                                        New Chat
                                    </button>
                                    
                                </div>
                            </div>
                            <div className="chat-body panel-body">
                                <ul className="chat">

                                  { this.props.chat.chat.map(message => 
                                    <p key={message.id}>

                                            {
                                                 (message.message_by == 0) ? (
                                                     <MyMessage message={message}/>
                                                 ) : (
                                                       <BotMessage message={message}/>
                                                 ) 
                                            }

                                    
                                    </p>
                                  )}

                                </ul>
                            </div>
                            <div className="panel-footer">
                                <div className="input-group">
                                    <input id="btn-input" type="text" className="form-control input-sm" ref="message" placeholder="Type your message here..."/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-warning btn-sm" id="btn-chat" onClick={this.sendMessage.bind(this)}>
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
        getLastChatMessages: () => {
            dispatch(getLastChatMessages());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
