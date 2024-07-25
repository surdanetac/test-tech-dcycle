import axios from 'axios';

export const getGender = (name) => {
  return axios.get(`http://localhost:3200/api/genderize/${name}`);
};

export const getNationality = (name) => {
  return axios.get(`http://localhost:3200/api/nationalize/${name}`);
};

export const getAge = (name) => {
  return axios.get(`http://localhost:3200/api/agify/${name}`);
};

export const getDataCovid = () => {
  return axios.get('https://api.covidtracking.com/v1/us/daily.json')
}
