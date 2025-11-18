import { Component, OnInit } from '@angular/core';
import UserLog from '../../models/UserLog';
import UsuarioService from '../../service/UsuarioService';

@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil-component.html',
  styleUrl: './perfil-component.css',
})
export class PerfilComponent implements OnInit {

  public user!: UserLog;

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.loadPerfil();
  }

  loadPerfil(): void {
    this._usuarioService.loadPerfil().then((resolve) => {
      console.log(resolve);
      this.user = resolve;
    });
  }
  

}
