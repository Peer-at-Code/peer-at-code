import axios from 'axios';

const fetcher = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  insecureHTTPParser: true
});

export default fetcher;
