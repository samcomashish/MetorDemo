import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CreatePost extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="container">
                    <div className="form-group col-md-12">
                        <div className="col-md-2">
                            <button type="button" className="btn btn-primary btn-lg" id="viewPost">
                                View Posts <span className="badge badge-light">5</span>
                            </button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-primary btn-lg">Add New Post</button>
                        </div>
                    </div>
                    <div className="well col-md-12">
                        <section className="media-body">
                            <div>
                                <input type="text" id="login-email" className="form-control input-lg" placeholder="post"/>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
