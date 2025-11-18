import { Component, OnInit } from '@angular/core';
import Compra from '../../models/Compra';
import ComprasService from '../../service/ComprasService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  standalone: false,
  templateUrl: './compras-component.html',
  styleUrl: './compras-component.css',
})
export class ComprasComponent implements OnInit {


  public compras!: Array<Compra>;

  constructor(private _comprasService: ComprasService, private router: Router) { } 

  ngOnInit(): void {
    this.loadCompras();
  }

  loadCompras(): void {
    this._comprasService.loadCompras().then((resolve) => {
      console.log(resolve);
      this.compras = resolve;
    }).catch((error) => {
      console.error('Error ', error);
      this.router.navigate(['/login']);
    });;
  }


}
