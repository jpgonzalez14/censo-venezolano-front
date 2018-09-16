import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

//register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('https://censovenezolanoback.herokuapp.com/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//login get user - token
export const loginUser = userData => dispatch => {
  axios
    .post('https://censovenezolanoback.herokuapp.com/users/login', userData)
    .then(res => {
      //save to locar storage
      const { token } = res.data;
      //set token to local storage
      localStorage.setItem('jwtToken', token);
      //set to the Auth Heather
      setAuthToken(token);
      //decode jwt to get user user
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//set current user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
//logout current user
export const logoutUser = () => dispatch => {
  //remove token from local storage
  localStorage.removeItem('jwtToken');
  //remove auth header
  setAuthToken(false);
  //set cuurent user to empty object {}
  dispatch(setCurrentUser({}));
};

/*axios
  .post('https://censovenezolanoback.herokuapp.com/users/register', newUser)
  .then(res => console.log(res.data))
  .catch(err => this.setState({ errors: err.response.data }));*/
