import React, { Component } from 'react';
import Session from '../session/session.component.jsx';
import Chat from '../chat/chat.component.jsx';

class Main extends Component {

    render() {
        return (


            <div className="row">
                <div className="col-md-4">
                    <Session />
                </div>
                <div className="col-md-8">
                    <Chat />
                </div>
            </div>

        );
    }
}



export default Main;
