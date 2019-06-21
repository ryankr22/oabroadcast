import React from 'react'
import Dropzone from 'react-dropzone';
import axios from 'axios'
import './CreateSlideshow.css';
import { Button, FormGroup, Input } from 'reactstrap';
import Header from '../Header/Header';
import * as sessionActions from '../../actions/sessionActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import authentication from '../../modules/authentication';
// const thumbsContainer = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   marginTop: 16
// };

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8, 
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
}

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

class CreateSlideshow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {  
            disabled: false,     
            files: [],
            tagName: ''
        }

        this.onTagNameChange = this.onTagNameChange.bind(this);  
        this.onSubmit = this.onSubmit.bind(this); 
      
        let username = authentication.verifyToken();

        if (username) {
          if (this.props.session.email === "" || this.props.session.loggedIn === false) {            
              this.props.sessionActions.loginSuccess(username);                  
          }
        }
      }

      onTagNameChange(event) {
        this.setState({ tagName: event.target.value });        
      }

     

      onSubmit() {
        let files = this.state.files;
        // Push all the axios request promise into a single array
        const uploaders = files.map(file => {

          var slideshowName = this.state.tagName;
          // Initial FormData
          const formData = new FormData();
          formData.append("file", file);       
          formData.append("tags", slideshowName);
          formData.append("upload_preset", "vcuvbm56"); // Replace the preset name with your own
          formData.append("api_key", "812922695185549"); // Replace API key with your own Cloudinary key
          formData.append("timestamp", (Date.now() / 1000) | 0);
          
          // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
          return axios.post("https://api.cloudinary.com/v1_1/oabroad/image/upload", formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }).then(response => {
            const data = response.data;
            const fileURL = data.secure_url // You should store this URL for future references in your app           
          })
        });
      
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
          // ... perform after upload is successful operation files, username, tagName, startDate, endDate
          this.saveSlideshowInSQL(files, this.props.session.email, this.state.tagName);
        });
      }

      saveSlideshowInSQL(files, username, tagName, startDate, endDate) {
        this.props.sessionActions.saveSlideshowInSQL(files, username, tagName);
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
          files: allFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          }))
        });
      }         
    
      render() {
        const files = this.state.files.map(file => (
          <div style={thumb} key={file.name}>
            <div style={thumbInner}>
              <img
                src={file.preview}
                style={img}
              />
            </div>
          </div>
        ))
    
        return (
          <section>
            <Header />
            <div className="dropzone">
              <Dropzone onDrop={this.onDrop.bind(this)} >
                {({getRootProps, getInputProps}) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />                    
                     <p className="text-center">
                        <img src="/download.png" alt="" />
                        <span className="dropFileLabel">Drop files here, or click to select files</span>
                    </p>
                  </div>
                )}
              </Dropzone>
            </div>
            <p className="text-center">To create a slideshow, drag and drop files onto the 
            dropzone above or click the clickzone to open file explorer. Then enter a unique name for the slideshow and the date/time the slideshow should run.</p>
            <aside>
              <h4>File Preview</h4>
              <ul className="filePreview">{files}</ul>
            </aside>
            
            <form className="container uploadForm">
                <FormGroup>
                    <label className="label">Slideshow Name</label>
                    <Input type="text" id="slideshowName" onChange={this.onTagNameChange} />
                </FormGroup>               
                <Button onClick={this.onSubmit}>Submit</Button>
            </form>
          </section>
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
    
    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateSlideshow));