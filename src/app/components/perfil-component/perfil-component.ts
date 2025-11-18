import { Component, OnInit } from '@angular/core';
import UserLog from '../../models/UserLog';
import UsuarioService from '../../service/UsuarioService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil-component.html',
  styleUrl: './perfil-component.css',
})
export class PerfilComponent implements OnInit {

  public user!: UserLog;

  constructor(private _usuarioService: UsuarioService , private router: Router) { }

  ngOnInit(): void {
    this.loadPerfil();
  }

  loadPerfil(): void {
    this._usuarioService.loadPerfil().then((resolve) => {
      console.log(resolve);
      this.user = resolve;
    }).catch((error) => {
      console.error('Error al obtener los detalles del empleado:', error);
      this.router.navigate(['/login']);
    });
  }
  

}
