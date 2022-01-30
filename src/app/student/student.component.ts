import { ClassField } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  student = new Student('Sachin Tendulkar', 8, new Date());
  constructor() {}

  ngOnInit(): void {}
}

export class Student {
  constructor(public fullName: string, public cgpa: number, public doj: Date) {}
}
