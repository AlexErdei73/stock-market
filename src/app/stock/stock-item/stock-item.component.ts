import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  stocks!: Stock[];
  stocksClasses!: any[];

  constructor() {}

  ngOnInit(): void {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765),
    ];
    let diffs = this.stocks.map(
      (stock) => stock.price / stock.previousPrice - 1
    );
    let largeChanges = diffs.map((diff) => Math.abs(diff) > 0.01);
    this.stocksClasses = this.stocks.map((stock, i) => {
      return {
        positive: stock.isPositiveChange(),
        negative: !stock.isPositiveChange(),
        'large-change': largeChanges[i],
        'small-change': !largeChanges[i],
      };
    });
  }

  toggleFavourite(event: MouseEvent, i: number) {
    console.log('We are toggling the favourite state for this stck', event);
    this.stocks[i].favourite = !this.stocks[i].favourite;
  }
}
