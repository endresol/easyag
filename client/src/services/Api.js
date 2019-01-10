import axios from 'axios';

export default () => {
  const url = 'http://localhost:8081/';
  return axios.create({
    baseURL: url,
  });
};
