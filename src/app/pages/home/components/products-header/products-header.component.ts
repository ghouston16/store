import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { string } from 'joi';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() colCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdate(newSort: string): void {
    this.sort = newSort
  }

  onItemUpdate(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void
  {
      this.colCountChange.emit(colsNum);
      //console.log(colsNum);
  }
}
