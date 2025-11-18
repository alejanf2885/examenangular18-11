import { Component, OnInit } from '@angular/core';
import Compra from '../../models/Compra';
import ComprasService from '../../service/ComprasService';

@Component({
  selector: 'app-compras',
  standalone: false,
  templateUrl: './compras-component.html',
  styleUrl: './compras-component.css',
})
export class ComprasComponent implements OnInit {


  public compras!: Array<Compra>;

  constructor(private _comprasService: ComprasService) { } 

  ngOnInit(): void {
    this.loadCompras();
  }

  loadCompras(): void {
    this._comprasService.loadCompras().then((resolve) => {
      console.log(resolve);
      this.compras = resolve;
    });
  }


}
