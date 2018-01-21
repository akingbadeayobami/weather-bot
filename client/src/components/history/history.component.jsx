import React, { Component } from 'react';
import { connect } from "react-redux";
import { getHistory } from "../../actions/history.actions";

class History extends Component {

    componentWillMount() {


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


                                <li>
                                    <a href="#">
                                    <strong><p>Yesterday</p></strong>
                                    <p> You are very well welcome we are happy </p>
                                    </a>
                                </li>
 
                                
                                <li>
                                    <a href="#">
                                    <strong><p>Yesterday</p></strong>
                                    <p> You are very well welcome we are happy </p>
                                    </a>
                                </li>
 


                                <li>
                                    <a href="#">
                                    <strong><p>Yesterday</p></strong>
                                    <p> You are very well welcome we are happy </p>
                                    </a>
                                </li>
 


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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);


