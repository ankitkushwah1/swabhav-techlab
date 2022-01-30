import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sw-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  // message: string;
  // today: string;
  // randomValue: number;
  // @Input()
  // rating: number;

  constructor() {
    // console.log('constructed created');
    // this.message = 'Welcome to Swabhav TEch';
    // this.today = new Date().toString();
    // this.randomValue = Math.random();
    // this.rating = 1;
  }
  // handleRating(event: any) {
  //   this.rating = event.value;
  //   console.log(this.rating);
  // }
  ngOnInit() {
    // console.log('component and view loded successfully');
    // setTimeout(() => {
    //   this.message = 'Welcome to DataBinding after 3 seconds';
    //   this.today = new Date().toString();
    // }, 3000);
  }
}
