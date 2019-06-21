import React, { Component } from 'react';
import * as sessionActions from '../../actions/sessionActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import { Table } from 'reactstrap';
import Button from '../Common/Button/Button';
import './MySlideshows.css';
import authentication from '../../modules/authentication';
import queryString from 'query-string';
// import styled from 'styled-components';


class MySlideshows extends Component {
    constructor(props, context) {
        super(props, context);            
      
        this.deleteSlideshow = this.deleteSlideshow.bind(this);
        this.editSlideshow = this.editSlideshow.bind(this);

        let username = authentication.verifyToken();

        if (username) {
          if (this.props.session.email === "" || this.props.session.loggedIn === false) {            
              this.props.sessionActions.loginSuccess(username);                  
          }
        }
    }

    componentDidMount() {
        //this.props.location.
        let params = queryString.parse(this.props.location.search);
        
        if (params) {
            let username = params.username;
            let tagName = params.tagName;
            this.props.sessionActions.login(username, tagName);   
        }
        this.props.sessionActions.getUserSlideshows(this.props.session.email);
    }

    deleteSlideshow(id, tagName) {
        this.props.sessionActions.deleteSlideshow(id, tagName);
    }

    editSlideshow(e, tagName) {
        //this.props.sessionActions.editSlideshow(tagName, this.props.session.email);

        this.props.history.push("/EditSlideshow", {tagName: tagName});
    }
   
    render() {        
        if (!this.props.session.userSlideshows) 
            return (
                <React.Fragment>
                    <Header />
                    <h2 className="text-center">My Slideshows</h2>
                </React.Fragment>);

        return (               
            <React.Fragment>
                <Header />
                <h2 className="text-center">My Slideshows</h2>

                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            {/* <th>Name</th> */}
                            <th>Start Date</th>
                            <th>End Date</th>                    
                            <th></th>
                           {
                            this.props.session.isAdmin === true ?
                                <th></th>
                            : <React.Fragment />
                           }
                        </tr>
                    </thead>
                    <tbody>                    
                        {this.props.session.userSlideshows.map(item => {  
                            let start = new Date(item.StartDate);
                            let end = new Date(item.EndDate);
                            return(
                                <tr>
                                    <td>{item.ID}</td>                                
                                    {/* <td>{item.TagName}</td> */}
                                    <td>{start.toString()}</td>
                                    <td>{end.toString()}</td>
                                    <td>
                                        <Button 
                                            id={item.configurationId} 
                                            showButton={true}
                                            className="btn btn-secondary btn-sm emailDesign"
                                            type="Button"
                                            onClick={(e) => this.editSlideshow(e, item.TagName)}
                                            displayText="Edit" 
                                        />
                                    </td> 
                                {                                                            
                                this.props.session.isAdmin === true ?
                                    <td>
                                        <Button 
                                            id={item.configurationId} 
                                            showButton={true}
                                            className="btn btn-secondary btn-sm emailDesign danger"
                                            type="Button"
                                            onClick={(e) => this.deleteSlideshow(item.ID, item.TagName)}
                                            displayText="Delete" 
                                        />
                                    </td> 
                                : <React.Fragment />
                                }                                  
                                </tr>     
                            );
                        })}                
                    </tbody>
                </Table>        
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
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MySlideshows));