import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as sessionActions from '../../actions/sessionActions';
import Header from '../Header/Header';
import generator from '../../modules/generator';
import { Button, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

export const GenerateButton = styled(Button)`
    width:140px !important;
    display: inline-block;
`;

export const AccessCodeInput = styled(Input)`
    width: 84%;
    display: inline-block;
`;

export const AccessCodeLabel = styled.label`
    width: 100%;
`;

export const Alert = styled.h3`
    text-align: center;
    background-color: #63c79f;
    color: white;
    padding-top:10px;
    padding-bottom:10px;
`;
class Administration extends Component {

    constructor(props) {
        super(props);
        this.onStartDateChange = this.onStartDateChange.bind(this);
        this.onEndDateChange = this.onEndDateChange.bind(this);
        this.generateCode = this.generateCode.bind(this);
        this.createGuestSlideshow = this.createGuestSlideshow.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);        
        this.onAccessCodeChange = this.onAccessCodeChange.bind(this);

        this.state = {  
            startDate: null,
            endDate: null,
            accessCode: '',
            username: '',                        
            alert: ''
        }
    }

    generateCode(event) {
        let accessCode = generator.generateAccessCode(8);

        this.setState({accessCode: accessCode});
    }
    onStartDateChange(event) {
        this.setState({ startDate: event.target.value });        
    }

    onEndDateChange(event) {
        this.setState({ endDate: event.target.value });        
    }

    onUsernameChange(event) {
        this.setState({username: event.target.value });
    }

    onAccessCodeChange(event) {
        this.setState({ accessCode: event.target.value });
    }

    createGuestSlideshow() {
        this.props.sessionActions.createUser(this.state.username, this.state.accessCode);
        this.props.sessionActions.saveGuestSlideshow(this.state.username, this.state.accessCode, this.state.startDate, this.state.endDate);
        this.setState({alert: 'Successfully saved!'});  
        this.props.history.push("/MySlideshows");           
    }

    render() {
        return (
            <React.Fragment>
                <Header />                          
                <h2 className="text-center">Administration</h2>
                {this.state.alert !== '' ? <Alert>{this.state.alert}</Alert> : <React.Fragment /> }
                <form className="container uploadForm">                                    
                    <FormGroup>
                        <label for="username">Username:</label>
                        <Input type="text" id="username" name="username" onChange={this.onUsernameChange} />
                    </FormGroup>
                    <FormGroup>
                        <AccessCodeLabel for="accessCode" readonly>Access Code:</AccessCodeLabel>
                        <AccessCodeInput type="text" id="accessCode" name="accessCode" onChange={this.onAccessCodeChange} value={this.state.accessCode} readOnly={true}/>
                        <GenerateButton onClick={this.generateCode}>Generate Code</GenerateButton>
                    </FormGroup>                   
                    <FormGroup>
                        <label for="start">Start Date/Time:</label>
                        <Input type="datetime-local" id="start" name="start" onChange={this.onStartDateChange} />
                    </FormGroup>
                    <FormGroup>
                        <label for="end">End Date/Time:</label>
                        <Input type="datetime-local" id="end" name="end" onChange={this.onEndDateChange} />
                    </FormGroup>
                    <Button onClick={this.createGuestSlideshow}>Submit</Button>
                </form>
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
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Administration));