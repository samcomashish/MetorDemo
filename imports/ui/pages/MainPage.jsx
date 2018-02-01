import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress(e){
    e.preventDefault();
    this.props.history.push('/createpost');
  }

  render(){
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    return (
        <div>
          <div className="container">
            <h1 className="text-center">{ loggedIn ? 'Welcome '+currentUser.username : '' }</h1>
            <div className="form-group col-md-12">
              <div className="col-md-2">
                <button type="button" className="btn btn-primary btn-lg" id="viewPost">
                  View Posts <span className="badge badge-light">5</span>
                </button>
              </div>
              <div className="col-md-2">
                <button onClick={this.onPress} type="button" className="btn btn-primary btn-lg">Add New Post</button>
              </div>
            </div>
            <div className="well col-md-12">
              <section className="media-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel
                  erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus sol
                  licitudin venenatis. Praesent et sem urna. Integer vitae lectus nis
                  l. Fusce sapien ante, tristique efficitur lorem et, laoreet ornare lib
                  ero. Nam fringilla leo orci. Vivamus semper quam nunc, sed ornare magna dignissim sed. Etiam interdum justo quis risus
                  efficitur dictum. Nunc ut pulvinar quam. N
                  unc mollis, est a dapibus dignissim, eros elit tempor diam, eu tempus quam felis eu velit.</p>
              </section>
              <section className="post-footer">
                <div className="post-footer-option container">
                  <ul className="list-unstyled">
                    <li><a href="#"><i className="glyphicon glyphicon-thumbs-up"></i> Like</a></li>
                    <li><a href="#"><i className="glyphicon glyphicon-comment"></i> Comment</a></li>
                    <li><a href="#"><i className="glyphicon glyphicon-share-alt"></i> Share</a></li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="well col-md-12">
              <section className="media-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel
                  erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus sol
                  licitudin venenatis. Praesent et sem urna. Integer vitae lectus nis
                  l. Fusce sapien ante, tristique efficitur lorem et, laoreet ornare lib
                  ero. Nam fringilla leo orci. Vivamus semper quam nunc, sed ornare magna dignissim sed. Etiam interdum justo quis risus
                  efficitur dictum. Nunc ut pulvinar quam. N
                  unc mollis, est a dapibus dignissim, eros elit tempor diam, eu tempus quam felis eu velit.</p>
              </section>
              <section className="post-footer">
                <div className="post-footer-option container">
                  <ul className="list-unstyled">
                    <li><a href="#"><i className="glyphicon glyphicon-thumbs-up"></i> Like</a></li>
                    <li><a href="#"><i className="glyphicon glyphicon-comment"></i> Comment</a></li>
                    <li><a href="#"><i className="glyphicon glyphicon-share-alt"></i> Share</a></li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="well col-md-12">
              <section className="media-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel
                  erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus sol
                  licitudin venenatis. Praesent et sem urna. Integer vitae lectus nis
                  l. Fusce sapien ante, tristique efficitur lorem et, laoreet ornare lib
                  ero. Nam fringilla leo orci. Vivamus semper quam nunc, sed ornare magna dignissim sed. Etiam interdum justo quis risus
                  efficitur dictum. Nunc ut pulvinar quam. N
                  unc mollis, est a dapibus dignissim, eros elit tempor diam, eu tempus quam felis eu velit.</p>
              </section>
              <section className="post-footer">
                <div className="post-footer-option container">
                  <ul className="list-unstyled">
                    <li><a href="#"><i className="glyphicon glyphicon-thumbs-up"></i> Like</a></li>
                    <li><a href="#"><i className="glyphicon glyphicon-comment"></i> Comment</a></li>
                    <li><a href="#"><i className="glyphicon glyphicon-share-alt"></i> Share</a></li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="well col-md-12">
              <section className="media-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel
                  erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus sol
                  licitudin venenatis. Praesent et sem urna. Integer vitae lectus nis
                  l. Fusce sapien ante, tristique efficitur lorem et, laoreet ornare lib
                  ero. Nam fringilla leo orci. Vivamus semper quam nunc, sed ornare magna dignissim sed. Etiam interdum justo quis risus
                  efficitur dictum. Nunc ut pulvinar quam. N
                  unc mollis, est a dapibus dignissim, eros elit tempor diam, eu tempus quam felis eu velit.</p>
              </section>
              <section className="post-footer">
                <div className="post-footer-option container">
                  <ul className="list-unstyled">
                    <li><a href="#"><i className="glyphicon glyphicon-thumbs-up"></i> Like</a></li>
                    <li><a href="#"><i className="glyphicon glyphicon-comment"></i> Comment</a></li>
                    <li><a href="#"><i className="glyphicon glyphicon-share-alt"></i> Share</a></li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
    );
  }
}

MainPage.propTypes = {
  username: PropTypes.string
}
