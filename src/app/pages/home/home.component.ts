import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cols = 3;
  constructor() { }

  ngOnInit(): void {
  }

  onColsCountChange(colsNum: number): void
  {
      this.cols = colsNum;
      //console.log(this.cols)
  }

}
