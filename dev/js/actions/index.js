import Axios from 'axios';

export const selectUser = (user) => {
  console.log("You clicked on user: ", user);
  return {
    type: 'USER_SELECTED',
    payload: user
  };
};

export const unselectUser = () => {
  console.log("You clicked on user: ", user);
  return {
    type: 'USER_SELECTED',
    payload: null
  };
};

// export const getData = (kind) => {
//   Axios.get(`http://swapi.co/api/${kind}`)
//   .then(response => {
//   	return {
//   	  type: 'DATA_SELECTED',
//   	  payload: response.data.results
//   	};
//   })
//   .catch(error => console.error(error));
// };