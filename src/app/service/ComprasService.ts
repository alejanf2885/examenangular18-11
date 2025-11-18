import { Injectable } from "@angular/core";
import Compra from "../models/Compra";
import { environment } from "../../environments/environment.development";
import axios from "axios";

@Injectable()
export default class ComprasService {


    async loadCompras(): Promise<Array<Compra>> {
        const request = 'api/Compra/ComprasUsuario';
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

    async comprarCubo(cuboId: number): Promise<void> {
        const request = 'api/Compra/InsertarPedido/' + cuboId;
        let url = environment.url + request;
        let token = localStorage.getItem('token');

        if (!token) {
            throw new Error('No token found');
        }

        const response = await axios.post(url, null , {
             headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data;
    }
}