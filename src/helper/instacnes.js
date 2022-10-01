/* eslint-disable */
import axios from 'axios'
// const baseURL= 'http://localhost:5070/REST';
const baseURL = process.env.REACT_APP_BASE_URL

export const deleteInstance = axios.create({
  baseURL: baseURL,
  method: 'DELETE',
})
export const getInstance = axios.create({
  baseURL: baseURL,
  method: 'GET',

})
export const updateInstance = axios.create({
  baseURL: baseURL,
  method: 'PUT',
})

export const addInstance = axios.create({
  baseURL: baseURL,
  method: 'POST',
})
