import React, { Component } from 'react';
import './App.css';
import CreateSlideshow from './components/CreateSlideshow/CreateSlideshow';
import { Route } from 'react-router-dom';
import SignupModal from './components/SignUpModal/SignUpModal';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from './actions/sessionActions';
import { withRouter } from 'react-router-dom';
import authentication from './modules/authentication';
import SlideshowFullscreen from './components/Slideshow/SlideshowFullscreen';
import MySlideshows from './components/MySlideshows/MySlideshows';
import EditSlideshow from './components/EditSlideshow/EditSlideshow';
import Administration from './components/Administration/Administration';

class App extends Component {
  constructor(props, context) {
    super(props, context);  

    let user = authentication.verifyToken();

    if (user) {
      if (this.props.session.email === "" || this.props.session.loggedIn === false) {            
          this.props.sessionActions.loginSuccess(user);                  
      }
    }
  }

  render() {  
    return (
      <React.Fragment>            
        <switch>        
          <Route exact path="/" component={SlideshowFullscreen}/>                  
          {/* <Route path="/CreateSlideshow" component={CreateSlideshow}/>            */}
          <Route path="/MySlideshows" component={MySlideshows}/>
          <Route path="/EditSlideshow" component={EditSlideshow}/>
          <Route path="/Administration" component={Administration} />          
        </switch>
      <SignupModal />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
