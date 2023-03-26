import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  name!: string;
  code!: string;
  price!: number;
  previousPrice!: number;
  positiveChange!: boolean;
  favourite = false;

  constructor() {}

  ngOnInit(): void {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
  }

  toggleFavourite() {
    console.log('We are toggling the favourite state for this stck');
    this.favourite = !this.favourite;
  }
}
