import * as types from '../actions/actionTypes';

export default function sessionReducer(state = [], action) {
    switch(action.type) {              

        case types.SHOW_SIGNUP_MODAL:
            return {...state, showSignupModal: action.showSignupModal}

        case types.LOGIN_SUCCESS:
            return {...state, loggedIn: true, company: action.user.company, isAdmin: action.user.isAdmin, email: action.user.username, loginFailed: false, showSignupModal: false }

        case types.LOGIN_FAILED:
            return {...state, loginFailed: true }

        case types.SIGNUP_SUCCESS:
            return {...state, loggedIn: true, email: action.email, loginFailed: false, signupFailed: false, showSignupModal: false }

        case types.SIGNUP_FAILED:
            return {...state, signupFailed: true }
        
        case types.GET_SLIDES_SUCCESS:
            return {...state, imageList: action.imageList }

        case types.GET_USER_SLIDESHOWS_SUCCESS:
            return {...state, userSlideshows: action.userSlideshows }

        case types.SIGN_OUT:
            return {...state, loggedIn: false, email: '', imageList: [] } 

        default:
            return state;
    }
}