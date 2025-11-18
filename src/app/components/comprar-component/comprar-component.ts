import { Component, OnInit } from '@angular/core';
import Cubo from '../../models/Cubo';
import CubosService from '../../service/CubosService';
import ComprasService from '../../service/ComprasService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprar',
  standalone: false,
  templateUrl: './comprar-component.html',
  styleUrl: './comprar-component.css',
})
export class ComprarComponent implements OnInit {


  public cubos!: Array<Cubo>;
  public selectedCuboId!: number;


  constructor(private _cuboService: CubosService, private _comprasService: ComprasService, private router: Router) {}


  ngOnInit(): void {
    this.loadCubos();
  }

  loadCubos(): void {

    this._cuboService.loadCubos().then((resolve) => {
      this.cubos = resolve;
    });
  }

  comprarCubo(): void {
    this._comprasService.comprarCubo(this.selectedCuboId).then((resolve) => {
      console.log(resolve);
      this.router.navigate(['/compras']);
    }).catch((error) => {
      console.error('Error ', error);
      this.router.navigate(['/login']);
    });
  }

}
