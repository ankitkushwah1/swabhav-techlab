import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  public textName: string = '';
  public fontSize!: number;
  public fontColor: string = '';
  public bgColor: string = '';

  constructor() {}

  ngOnInit(): void {}
}
