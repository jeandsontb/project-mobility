// import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.0.105:8081';

const request = async (method, endpoint, params, token = null) => {
  method = method.toLowerCase();
  let fullUrl = `${baseURL}${endpoint}`;
  let body = null;

  switch (method) {
    case 'get':
      let queryString = new URLSearchParams(params).toString();
      fullUrl += `?${queryString}`;
      break;
    case 'post':
    case 'put':
    case 'delete':
      body = JSON.stringify(params);
      break;

    default:
  }

  let headers = {'Content-Type': 'application/json'};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  let req = await fetch(fullUrl, {
    method,
    headers,
    body,
  });

  let json = req.json();
  return json;
};

export default {
  getPizzeria: async () => {
    let json = await request('get', '/pizzeria', {});
    return json;
  },

  addTracking: async (id, object) => {
    let json = await request('post', `/points/${id}`, {
      obj: object,
    });

    return json;
  },
};
