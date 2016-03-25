import axios from 'axios'
var API = 'http://localhost:3000/api/v1/teas';

function getData(){
  return axios.get(API);
}

export default function getMockData(){
  return axios.all([getData()])
    .then((data) => (data))
}

