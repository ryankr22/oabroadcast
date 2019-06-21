import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../../actions/sessionActions';
import { withRouter } from 'react-router-dom';
import './Header.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    //NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
} from 'reactstrap';
import authentication from '../../modules/authentication';

const Img = styled.img`    
    padding:1em;
    height:70px;
`;

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.signOut = this.signOut.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
          isOpen: false,
          username: ''
        };
      }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    signOut() {
        authentication.signOut();    
        this.props.sessionActions.signOut();                   
        this.props.history.push('/');        
    }

    render() {                        
        return (            
            <Navbar id="slideshowNavbar" dark="true" expand="md">
                <div className="container">
                <NavbarBrand href="/"></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                    {
                    this.props.session.isAdmin === true ? 
                    <NavItem>
                        <NavLink activeClassName="selected" className="nav-link" to="/">Slideshow</NavLink>
                    </NavItem>
                    : <React.Fragment />
                    }
                    {/* <NavItem>
                        <NavLink activeClassName="selected" className="nav-link" to="/Slideshow">Slideshow</NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                        <NavLink activeClassName="selected" className="nav-link" to="/CreateSlideshow">Create Slideshow</NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink activeClassName="selected" className="nav-link" to="/MySlideshows">My Slideshows</NavLink>
                    </NavItem>
                    
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        {this.props.session.email}
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>                               
                                {/* <NavItem>
                                    <NavLink activeClassName="selected" className="nav-link" to="/MySlideshows">My Slideshows</NavLink>
                                </NavItem>                                */}
                                {
                                    this.props.session.isAdmin === true ? 
                                    <NavItem>
                                        <NavLink activeClassName="selected" className="nav-link" to="/administration">Administration</NavLink>
                                    </NavItem>
                                    : <React.Fragment />
                                }
                                <NavItem>
                                <span className="nav-link pointer" onClick={this.signOut}>Sign Out</span>
                                </NavItem>
                            </DropdownItem>                               
                         </DropdownMenu>
                    </UncontrolledDropdown>

                       
                  
                   
                    </Nav>
                </Collapse>
                </div>
            </Navbar>
        
        );                       
    }
};

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));