import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Cubo from '../../models/Cubo';
import CubosService from '../../service/CubosService';

@Component({
  selector: 'app-marca',
  standalone: false,
  templateUrl: './marca-component.html',
  styleUrl: './marca-component.css',
})
export class MarcaComponent implements OnInit {

  public cubos!: Array<Cubo>;
  public marca!: string;
  constructor(private _activatedRoute: ActivatedRoute, private _cubosService: CubosService) {}


  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      if (params['marca'] != null) {
        this.marca = params['marca'];
        this.loadCubosByMarca();

      }
    });
  }

  loadCubosByMarca(): void {
    this._cubosService.loadCubosByMarca(this.marca).then((resolve) => {
      this.cubos = resolve;
      
    });
  }
}
