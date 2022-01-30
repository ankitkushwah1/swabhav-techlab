import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'sw-number-api',
  templateUrl: './number-api.component.html',
  styleUrls: ['./number-api.component.css'],
})
export class NumberApiComponent implements OnInit {
  public textId = 'p';
  public hidden1 = true;
  public textItems: Array<NumberApi> = new Array<NumberApi>();
  constructor(private http: HttpClient) {}
  public str = '';

  clickHandler(e: any) {
    this.str = 'http://numbersapi.com/' + e + '?json';
    this.http.get<any>(this.str).subscribe((d) => {
      this.textItems.push(new NumberApi(d.text, new Date()));
      console.log(this.textItems);
    });
    this.hidden1 = false;
  }
  ngOnInit(): void {
    console.log(this.str);
  }
}

class NumberApi {
  constructor(public text: string, public date: Date) {}
}
