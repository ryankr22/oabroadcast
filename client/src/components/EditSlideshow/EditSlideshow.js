import React, { Component } from 'react';
import * as sessionActions from '../../actions/sessionActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'
import Button from '../Common/Button/Button';
import Header from '../Header/Header';
import { Container, Row, Col } from 'reactstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios'
import authentication from '../../modules/authentication';

export const ImgStyled = styled.img`
    width:200px;
    height:200px;
`;

export const H2 = styled.h2`
    color: #000;
`;

export const ButtonStyled = styled(Button)`
    font-size:16px;
    background-color:#4f4f4f;
    color: #fff;
    height:35px;
    width:200px;
    border-radius: 5px;
    outline: none !important;
    border: none !important;  
    cursor:pointer; 
    margin-top:15px;
`;

export const RowStyled = styled(Row)`
    margin-bottom:1em;
    margin-top:1em;
`;

class EditSlideshow extends Component {
    constructor(props, context) {
        super(props, context);    
      
        this.removeImage = this.removeImage.bind(this);
        this.newImage = this.newImage.bind(this);
        this.state = {  
            disabled: false,     
            files: [],
            tagName: this.props.location.state.tagName,
        }

        let username = authentication.verifyToken();

        if (username) {
            if (this.props.session.email === "" || this.props.session.loggedIn === false) {            
                this.props.sessionActions.loginSuccess(username);                  
            }
        } 
      }

    componentDidMount() {            
        let tagName = this.state.tagName;

        if (tagName === '' || tagName === undefined || tagName === null)
            tagName = 'Demo';
                
        this.props.sessionActions.getSlidesByTag(tagName);
    }

    removeImage(publicId) {
        let tagName = this.props.location.state.tagName;
        this.props.sessionActions.deleteImage(publicId, tagName);  
    }

    onDrop(files) {
        let allFiles = [];
        this.state.files.forEach(function(element) {
          allFiles.push(element);
        });      

        let newFiles = files.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }));

        newFiles.forEach(function(f) {
          allFiles.push(f);
        });

        this.setState({
          files: newFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          }))
        });

        files = this.state.newFiles;
        // Push all the axios request promise into a single array
        const uploaders = newFiles.map(file => {

          var tagName = this.props.location.state.tagName;
          // Initial FormData
          const formData = new FormData();
          formData.append("file", file);       
          formData.append("tags", tagName);
          formData.append("upload_preset", "vcuvbm56"); // Replace the preset name with your own
          formData.append("api_key", "812922695185549"); // Replace API key with your own Cloudinary key
          formData.append("timestamp", (Date.now() / 1000) | 0);
          
          // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
          return axios.post("https://api.cloudinary.com/v1_1/oabroad/image/upload", formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }).then(response => {
            this.props.sessionActions.getSlidesByTag(tagName); 
          })
        });
      }         

    newImage() {

    }

    render() {              
        return (
        <React.Fragment>
         <Header /> 
          <div className="slideshow-container">             
          <Container>
            <H2>Edit Slideshow</H2>
            {/* <RowStyled>               
                <Col xs="12" xl="12" className="text-right">
                    <ButtonStyled displayText="New Image" />
                </Col>
            </RowStyled> */}
            <div className="dropzone">
              <Dropzone onDrop={this.onDrop.bind(this)} >
                {({getRootProps, getInputProps}) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />                    
                     <p className="text-center">
                        
                        <span className="dropFileLabel">Drop files here, or click to select files</span>
                    </p>
                  </div>
                )}
              </Dropzone>
            </div>
            <RowStyled>                             
            { this.props.session.imageList.map((each) =>                
                <Col xs="12" xl="3">                           
                    <div>
                        <ImgStyled src={each.url} />                                        
                        <ButtonStyled displayText="Remove" onClick={((e) => this.removeImage(each.public_id))} />
                    </div>          
                </Col>               
            )}                          
            </RowStyled>
              </Container>
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
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditSlideshow));