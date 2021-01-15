import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="alert alert-warning" role="alert">
                    A simple warning alert with <Link to="/products" className="alert-link">an example link</Link>. Give it a click
                    if you like.
                </div>
            </div>
        );
    }
}

export default NotFoundPage;
