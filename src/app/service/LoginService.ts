import axios from 'axios';
import { environment } from '../../environments/environment.development';
import User from '../models/User';
import { Injectable } from '@angular/core';

@Injectable()
export default class LoginService {
  async login(user: User): Promise<string> {
    const request = 'api/Manage/Login';
    let url = environment.url + request;
    const response = await axios.post(url, user);
    return response.data.response;
  }
}
