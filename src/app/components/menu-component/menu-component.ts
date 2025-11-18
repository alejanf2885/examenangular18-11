import { Component, OnInit } from '@angular/core';
import CubosService from '../../service/CubosService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent implements OnInit {
  public marcas: Array<string> = [];
  public selectedMarca: string = '';

  constructor(private _cubosService: CubosService, private router: Router) {}

  ngOnInit(): void {
    this.loadMarcasCubos();
  }

  loadMarcasCubos(): void {
    this._cubosService.loadMarcasCubos().then((resolve) => {
      this.marcas = resolve;
    });
  }

  setMarca(marca: string): void {
    this.selectedMarca = marca;
  }

  goToMarca(marca: string): void {
    if (marca && marca.length > 0) {
      this.router.navigate(['/cubos/marca', marca]);
    }
  }

  logOut(): void {
    let token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    } else {
      alert('No hay ningun usuario logueado');
    }
  }
}
