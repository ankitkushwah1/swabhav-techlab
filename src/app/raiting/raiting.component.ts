import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sw-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.css'],
})
export class RaitingComponent implements OnInit {
  @Input()
  rating: number = 1;
  constructor() {
    this.rating = 1;
  }

  ngOnInit(): void {
    console.log(this.rating);
  }
}
