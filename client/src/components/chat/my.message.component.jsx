import React, { Component } from 'react'; 

class MyMessageBox extends Component {

    render() {
        return (

            <li className="right clearfix"><span className="chat-img pull-right">
                <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" className="img-circle" />
            </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <small className=" text-muted"><span className="glyphicon glyphicon-time"></span>13 mins ago</small>
                        <strong className="pull-right primary-font">Bhaumik Patel</strong>
                    </div>
                    <p>
                        {this.props.message.message}
                    </p>
                </div>
            </li>
        )
    }

                                     
           
 
}
 

 

export default MyMessageBox;
