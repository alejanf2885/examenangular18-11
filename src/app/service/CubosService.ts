import axios from 'axios';
import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';
import Cubo from '../models/Cubo';

@Injectable()
export default class CubosService {
  async loadCubos(): Promise<Array<Cubo>> {
    const request = 'api/Cubos';
    let url = environment.url + request;
    const response = await axios.get(url);
    return response.data;
  }

  async loadMarcasCubos(): Promise<Array<string>> {
    const request = 'api/Cubos/Marcas';
    let url = environment.url + request;
    const response = await axios.get(url);
    return response.data;
  }

  async loadCubosByMarca(marca: string): Promise<Array<Cubo>> {
    const request = 'api/Cubos/CubosMarca/' + marca;
    let url = environment.url + request;
    const response = await axios.get(url);
    return response.data;
  }
}
