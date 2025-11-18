import { Component, OnInit } from '@angular/core';
import Cubo from '../../models/Cubo';
import CubosService from '../../service/CubosService';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubo>;

  constructor(private _cubosService: CubosService) {}

  loadCubos(): void {
    this._cubosService.loadCubos().then((resolve) => {
      console.log(resolve);
      this.cubos = resolve;
    });
  }

  ngOnInit(): void {
    this.loadCubos();
  }
}
