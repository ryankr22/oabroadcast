import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';
import { withRouter } from 'react-router-dom';
import { Button, Modal, ModalBody } from 'reactstrap';
import './SignUpModal.css';
import TextInputPrimitive from '../Common/Primitives/TextInputPrimitive';

class SignUpModal extends Component { 
    constructor(props, context) {
        super(props, context);    
        
        this.onClickSignUp = this.onClickSignUp.bind(this); 
        this.passwordOnChange = this.passwordOnChange.bind(this); 
        this.passwordVerifyOnChange = this.passwordVerifyOnChange.bind(this); 
        this.emailOnChange = this.emailOnChange.bind(this);  
        this.memberLogin = this.memberLogin.bind(this);  
        this.memberSignUp = this.memberSignUp.bind(this);  
        this.onClickLogin = this.onClickLogin.bind(this);  
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            alreadyMember: true,
            email: '',
            password: '',
            passwordVerify: '',
            signupError: ''
        }
    }

    memberSignUp() {     
        this.setState({ alreadyMember: false, signupError: '' });
    }

    memberLogin() {        
        this.setState({ alreadyMember: true, signupError: '' });
    }

    passwordOnChange(event) {
        this.setState({password: event.target.value });
    }

    passwordVerifyOnChange(event) {
        this.setState({passwordVerify: event.target.value });
    }

    emailOnChange(event) {
        this.setState({email: event.target.value });
    }

    closeModal() {
        this.props.sessionActions.showSignupModal(false);
    }

    onClickLogin() { 
        try {

            let email = this.state.email;
            let password = this.state.password;      
            
            if (email === '') {
                this.displayEmailError('Please enter your email');
                return;
            }        

            if (password === '') {            
                this.displayPasswordError('Please enter your password');
                return;
            } 
                            
            this.props.sessionActions.login(email, password);       
                      
            this.props.history.push("/MySlideshows");   
        } catch (error) {
            console.log(error);
        }
    }

    onClickSignUp() { 
        try {
            let email = this.state.email;
            let password = this.state.password;
            let password2 = this.state.passwordVerify;
            this.clearWarnings();

            if (email === '') {
                this.setState({signupError: 'Please enter a valid username'});
                return;
            }         

            if (password!== password2) {
                this.setState({signupError: 'Passwords do not match'});            
                return;
            } 

            if (password === '' || password2 === '') {
                this.setState({signupError: 'Please enter and verify your password'});                            
                return;
            } 
                                    
            this.props.sessionActions.signupUser(email, password, password2);                       
            
            this.props.history.push("/MySlideshows");        
        
        } catch (error) {
            console.log(error);
        }
    }  

    clearWarnings(){
        this.setState({signupError: ''});
    }
        
    validateEmail(email) {
        // eslint-disable-next-line
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {                   
        if (this.props.session.loggedIn === true)
            return <React.Fragment></React.Fragment>;

        if (!this.state.alreadyMember) {
            return ( 
                <Modal isOpen={true} >               
                    <ModalBody>
                        <div className="signup-modal">
                            {/* <img src="images/logo.png" alt="OABroadcast" /> */}
                            <div className="closeModal" onClick={this.closeModal}>X</div>
                              
                            <div className="email-label">Sign up to save configurations!</div>                                                                    
                            {this.state.signupError !== '' ? <div className="text-center font-italic">{this.state.signupError}</div> : ''}
                            {this.props.session.signupFailed === true ? <div className="text-center font-italic">Email already in use!</div> : ''}
                            <TextInputPrimitive type="email" id="emailSignup" placeholder="email" onChange={this.emailOnChange} />                                                                                         
                            <TextInputPrimitive type="password" id="password1" placeholder="password" onChange={this.passwordOnChange} />                                                           
                            <TextInputPrimitive type="password" id="password2" placeholder="re-enter password" onChange={this.passwordVerifyOnChange} />
                            <Button color="primary" onClick={this.onClickSignUp}>Sign Up!</Button>
                            <span className="loginLink" onClick={this.memberLogin}>Already a member? Click here!</span>                
                                        
                        </div>
                    </ModalBody>                
                </Modal>                               
            );
        }   

        return ( 
            <Modal isOpen={true} >               
                <ModalBody>
                    <div className="signup-modal">
                        {/* <img src="images/logo.png" alt="OABroadcast" /> */}
                        <div className="closeModal" onClick={this.closeModal}>X</div>
                        <div className="textInput-container form-group">  
                            <div className="email-label">Login</div>   
                            {this.props.session.loginFailed === true ? <div className="text-center font-italic">Login Failed! Incorrect username/password</div> : ''}
                            <TextInputPrimitive type="email" id="emailSignup" placeholder="email" onChange={this.emailOnChange}/>                             
                            <TextInputPrimitive type="password" id="password1" placeholder="password" onChange={this.passwordOnChange}/>                                                        
                            <Button color="primary" onClick={this.onClickLogin}>Login</Button>
                            {/* <span className="loginLink" onClick={this.memberSignUp}>Not a member? Sign up!</span>                    */}
                        </div>             
                    </div>
                </ModalBody>                
            </Modal>                               
            );
        }
    }

    function mapStateToProps(state, ownProps) {    
        return {
            session: state.session,
            api: state.api
        };
    }
  
    function mapDispatchToProps(dispatch) {
        return {
            sessionActions: bindActionCreators(sessionActions, dispatch)            
        };
    }    

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpModal)); 