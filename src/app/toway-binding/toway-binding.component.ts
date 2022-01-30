import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-toway-binding',
  templateUrl: './toway-binding.component.html',
  styleUrls: ['./toway-binding.component.css'],
})
export class TowayBindingComponent implements OnInit {
  salary: number = 10000;
  favLanguage: string = '';
  constructor() {}

  ngOnInit(): void {}
}
