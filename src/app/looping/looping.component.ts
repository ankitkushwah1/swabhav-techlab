import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'sw-looping',
  templateUrl: 'looping.component.html',
})
export class LoopingComponent {
  balls: Array<Ball> = new Array<Ball>();
  makeList(size: number) {
    return new Array(size);
  }
  getColor(isEven: boolean) {
    return isEven ? 'green' : 'red';
  }
  constructor() {
    this.balls.push(new Ball(1, 'green', 'ball_01'));
    this.balls.push(new Ball(2, 'green', 'ball_02'));
    console.log('looping controller');
  }
  handleClickEvent(id: number) {
    console.log(id);
    let btn = this.balls.find((x) => x.id == id);
    if (btn) btn.color = 'yellow';
  }
}

export class Ball {
  constructor(
    public id: number,
    public color: string,
    public description: string
  ) {}
}
