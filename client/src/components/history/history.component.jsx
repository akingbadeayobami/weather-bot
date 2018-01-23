import React, { Component } from 'react';
import { connect } from "react-redux";
import { getHistory } from "../../actions/history.actions";
import { getChatMessages } from "../../actions/chat.actions"; 
import {date_format} from '../../utils';

class History extends Component {

    componentWillMount() {

        this.props.getHistory();

    }

    getChatMessages(history_id){
 
         this.props.getChatMessages(history_id);

    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            History
 
                            </div>
                        <div className="history-body panel-body">
                            <ul className="history">

                                {
                                    this.props.history.history.map(chat => 
                                        <li key={chat._id}>
                                            <a  onClick={this.getChatMessages.bind(this,chat.history_id)} >
                                                <strong><p>{date_format(chat.created_at)}</p></strong>
                                                <p> {chat.message} </p>
                                            </a>
                                        </li>
                                    )
                                }


                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.history,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHistory: () => {
            dispatch(getHistory());
        },
        getChatMessages: (history_id)=>{
            dispatch(getChatMessages(history_id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);


