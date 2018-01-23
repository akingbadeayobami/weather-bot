import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllSession } from "../../actions/session.actions";
import { getSessionMessages } from "../../actions/chat.actions"; 
import {date_format} from '../../utils';

class Session extends Component {

    componentWillMount() {

        this.props.getAllSession();

    }

    getSessionMessages(session_id){
 
         this.props.getSessionMessages(session_id);

    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Sessions  
                            </div>
                        <div className="session-body panel-body">
                            <ul className="session">

                                {
                                    this.props.session.session.map(chat => 
                                        <li key={chat._id}>
                                            <a  onClick={this.getSessionMessages.bind(this,chat.session_id)} >
                                                <strong><p>{date_format(chat.created_at)}</p></strong>
                                                <p className="one-line"> {chat.message} </p>
                                            </a>
                                        </li>
                                    )
                                }

                                

                            </ul>

                            {(this.props.session.session.length === 0) && (<p className="text-center">You have not had any chat sessions</p>)}

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        session: state.session,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllSession: () => {
            dispatch(getAllSession());
        },
        getSessionMessages: (session_id)=>{
            dispatch(getSessionMessages(session_id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Session);


