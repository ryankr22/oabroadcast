import * as types from './actionTypes';
import axios from 'axios';

export function getLiveSlideshow(username) {
    return dispatch => {
        return axios.post('/api/liveSlideshow', { username: username })
        .then(res => {      
            console.log(res);
            if (res.data.result.length > 0)
                dispatch(getSlidesByTag(res.data.result[0].TagName));                                                                                                                                                                              
        }).catch(function(error) {
            console.log(error);           
        });
    }
}

export function deleteImage(publicId, tagName) {
    return dispatch => {
        return axios.post('/api/deleteImage', { publicId: publicId })
        .then(res => {            
            dispatch(getSlidesByTag(tagName));                                                                                                                                                                              
        }).catch(function(error) {
            console.log(error);           
        });
    }
}

export function showSignupModal(showSignupModal) {
    return { type: types.SHOW_SIGNUP_MODAL, showSignupModal }
}

export const login = (username, password) => {
    return dispatch => {
        return axios.post('/users/login', { username: username, password: password })
            .then(res => {
                if (res.status !== 200) {
                    dispatch(loginFailed());                                                                   
                } else {
                    console.log(res);
                    if (res.data.success === true)                        
                        window.localStorage.setItem('tk', res.data.token);

                    let user = {
                        username: username,
                        isAdmin: res.data.isAdmin,
                        company: res.data.company
                    }

                    dispatch(loginSuccess(user));    
                    dispatch(getUserSlideshows(username));                                
                }                                                                                                               
            }).catch(function(error) {
                console.log(error);
                dispatch(loginFailed()); 
            });
    }
}

export const createUser = (username, password) => {
    return dispatch => {
        return axios.post('/users/signup', { username: username, password: password })
            .then(res => {
                if (res.status !== 200) throw Error(res.statusText);                                             
            }).catch(function(error) {
                console.log(error);
                dispatch(loginFailed()); 
            });
    }
}

export const signupUser = (username, password) => {
    return dispatch => {
        return axios.post('/users/signup', { username: username, password: password })
            .then(res => {
                if (res.status !== 200) throw Error(res.statusText);                                

                if (res.data === 'success') 
                    dispatch(signupSuccess(username));
                else
                    dispatch(signupFailed());
            }).catch(function(error) {
                console.log(error);
                dispatch(loginFailed()); 
            });
    }
}

export const deleteSlideshow = (id, username) => {
    return dispatch => {
        return axios.post('/api/deleteSlideshow', { id: id })
        .then(res => { 
            if (res.status !== 200) throw Error(res.statusText); 
                                                                        
            dispatch(getUserSlideshows(username));
        }).catch(error => {
            throw(error);
        }); 
    }
}

export const getUserSlideshows = (username) => {
    return dispatch => {
        return axios.post('/api/getUserSlideshows', { username: username})
        .then(res => { 
            if (res.status !== 200) throw Error(res.statusText); 
            console.log(res.data.result);
           
            dispatch(getUserSlideshowsSuccess(res.data.result));
                                     
        }).catch(error => {
            throw(error);
        }); 
    }
}

export const getSlidesByTag = (tagName) => {
    return dispatch => {
        return axios.post('/api/slideshow', { tagName: tagName})
        .then(res => { 
            if (res.status !== 200) throw Error(res.statusText);                                           
            var images = [];

            if (res.data === '') return;

            res.data.resources.forEach(element => {                
                images.push(element);
            });
                
            dispatch(getSlidesSuccess(images));                              
        }).catch(error => {
            throw(error);
        }); 
    }
}

export const saveSlideshowInSQL = (files, username, tagName, startDate, endDate) => {
    return dispatch => {
        return axios.post('/api/saveSlideshowSQL', { files: files, username: username, tagName: tagName, startDate: startDate, endDate: endDate })
        .then(res => { 
            if (res.status !== 200) throw Error(res.statusText);                                           
                                                                            
        }).catch(error => {
            throw(error);
        }); 
    }
}

export const saveGuestSlideshow = (username, tagName, startDate, endDate) => {
    return dispatch => {
        return axios.post('/api/saveGuestSlideshow', { username: username, tagName: tagName, startDate: startDate, endDate: endDate })
        .then(res => { 
            if (res.status !== 200) throw Error(res.statusText);                                           
                                                                            
        }).catch(error => {
            throw(error);
        }); 
    }
}

export function getUserSlideshowsSuccess(userSlideshows) {
    return { type: types.GET_USER_SLIDESHOWS_SUCCESS, userSlideshows };
}

export function getSlidesSuccess(imageList) {
    return { type: types.GET_SLIDES_SUCCESS, imageList };
}

export function loginSuccess(user) {
    return { type: types.LOGIN_SUCCESS, user };
}

export function loginFailed() {
    return { type: types.LOGIN_FAILED };
}

export function signupSuccess(email) {
    return { type: types.SIGNUP_SUCCESS, email };
}

export function signupFailed() {
    return { type: types.SIGNUP_FAILED };
}

export function resetApp() {
    return { type: types.RESET_APP };
}

export function signOut() {
    return { type: types.SIGN_OUT };
}