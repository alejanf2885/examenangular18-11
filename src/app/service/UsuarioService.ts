import axios from 'axios';
import { environment } from '../../environments/environment.development';
import UserLog from '../models/UserLog';
import { Injectable } from '@angular/core';

@Injectable()
export default class UsuarioService {
  async loadPerfil(): Promise<UserLog> {
    const request = 'api/Manage/PerfilUsuario';
    let url = environment.url + request;
    let token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found');
    }
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}
