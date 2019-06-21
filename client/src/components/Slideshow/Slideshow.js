import React, { Component } from 'react';
import queryString from 'query-string'
import { Zoom } from 'react-slideshow-image';
import './Slideshow.css';
import * as sessionActions from '../../actions/sessionActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';

const zoomOutProperties = {
    duration: 9000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }


class Slideshow extends Component {
    componentDidMount() {

        let tagName = queryString.parse(this.props.location.search);  
        console.log(tagName);
        if (tagName === '' || tagName === undefined || tagName === null)
            tagName = 'Demo';
        
        this.props.sessionActions.getSlidesByTag(tagName);
    }

    render() {      
      if (this.props.session.imageList.length === 0) return <React.Fragment></React.Fragment>
      
        return (
        <React.Fragment>
          <Header /> 
          <div className="slideshow-container">            
              <h1>
              <Zoom {...zoomOutProperties}>
                  { this.props.session.imageList.map((each) => 
                      <img key={each.public_id} style={{width: "100%"}} src={each.url} />) }
              </Zoom>
              </h1>
          </div>
        </React.Fragment>
        );
    }
} 

function mapStateToProps(state, ownProps) {    
    return {
      session: state.session    
    };
  }
  
    function mapDispatchToProps(dispatch) {
        return {
            sessionActions: bindActionCreators(sessionActions, dispatch)          
        };
    }   
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Slideshow));