import React, { Component } from 'react';
import History from '../history/history.component.jsx';
import Chat from '../chat/chat.component.jsx';

class Main extends Component {

    componentWillMount() {


    }
    render() {
        return (
            <div id="main-wrapper">

                <nav class="navbar navbar-default">
                    <div class="container">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">Weather Chat Bot</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">Home</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <History />
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
