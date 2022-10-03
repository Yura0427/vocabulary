import axios from 'axios';

const PATH = 'http://localhost:3004/';

export const axiosRoot = axios.create({
  baseURL: PATH,
});