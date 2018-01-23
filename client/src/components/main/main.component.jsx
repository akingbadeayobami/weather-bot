import React, { Component } from 'react';
import Session from '../session/session.component.jsx';
import Chat from '../chat/chat.component.jsx';

class Main extends Component {

    componentWillMount() {


    }
    render() {
        return (
            <div id="main-wrapper">

                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Weather Chat Bot</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Session />
                        </div>
                        <div className="col-md-8">
                            <Chat />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Main;
