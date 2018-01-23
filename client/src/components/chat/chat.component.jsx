import React, { Component } from 'react';
import { postMessage, getNewSession } from "../../actions/chat.actions";
import { messageByConstants } from "../../constants";
import MyMessage from "./my.message.component";
import BotMessage from "./bot.message.component";
import { connect } from "react-redux";

class Chat extends Component {

    componentWillMount() {

        this.props.getNewSession();

    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    sendMessage() {

        const message = this.refs.message.value;
 
        this.props.postMessage(message, this.props.chat.session_id);

        this.refs.message.value = "";

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Chat
                          
                        </div>
                        <div className="chat-body panel-body">
                            <ul className="chat">

                                {this.props.chat.chat.map(message =>

                                    <div key={message._id}>

                                        {
                                            (message.message_by === messageByConstants.USER) ? (
                                                <MyMessage message={message} />
                                            ) : (
                                                    <BotMessage message={message} />
                                                )
                                        }


                                    </div>
                                )}

                            </ul>
 
                            {(this.props.chat.loading) && (<div className="loader"  />) }
                            
                            <div className="chatBottom"
                                ref={(el) => { this.messagesEnd = el; }}>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <form onSubmit={(e) => {
                                    this.sendMessage()
                                    e.preventDefault();
                                }} >
                            <div className="input-group">
                                <input id="btn-input" type="text" className="form-control input-sm" ref="message" placeholder="Type your message here..." required/>
                                <span className="input-group-btn">
                                    <button className="btn btn-warning btn-sm" type="submit" id="btn-chat" >
                                        Send</button>
                                </span>
                            </div>
                            </form>
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
        getNewSession: () => {
            dispatch(getNewSession());
        },
        postMessage: (message, session_id) => {
            dispatch(postMessage(message, session_id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
