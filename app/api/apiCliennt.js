import {create} from 'apisauce';
import authStorage from '../auth/storage';

let check = 'https://excellentschool.in';
let local = 'http://192.168.1.8:3002';
const apiClient = create({
  baseURL: check + '/api',
  timeout: 15000,
  timeoutErrorMessage: 'Connection Timed-Out',
});

apiClient.addAsyncRequestTransform(async request => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers['Authorization'] = authToken;
});

export default apiClient;
