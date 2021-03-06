import axios from 'axios';
import User from '../models/User';

import { AsyncStorage } from "react-native"

const ROOT_URL = 'http://13.209.52.197';

export const signUp = (email: string, password: string, age: number, gender: string, company: string) => {
    axios.post(`${ROOT_URL}/api/sign_up`, 
    {
        'email': email,
        'password': password,
        'age': age,
        'gender': gender,
        'company': company,
     },
     {
        headers: {
            'Content-Type': 'application/json'
        }
     })
    .then((response) => {
      console.log(response);
    })
}

export const signIn = (email: String, password: String) => {
    axios.post(`${ROOT_URL}/api/sign_in`, 
    {
        'email': email,
        'password': password,
     },
     {
        headers: {
            'Content-Type': 'application/json'
        }
     })
    .then((response) => {
        AsyncStorage.setItem('@app:session', response['data']['access_token']);
    })
}