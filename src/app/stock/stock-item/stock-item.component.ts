import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  stock!: Stock;

  constructor() {}

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

  toggleFavourite(event: MouseEvent) {
    console.log('We are toggling the favourite state for this stck', event);
    this.stock.favourite = !this.stock.favourite;
  }
}
