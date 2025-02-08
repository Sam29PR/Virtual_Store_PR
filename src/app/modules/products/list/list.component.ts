import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  products = [
    { id: 1, name: 'Camiseta', price: 25 },
    { id: 2, name: 'Gorra', price: 15 },
    { id: 3, name: 'Reloj', price: 50 },
  ];
}
