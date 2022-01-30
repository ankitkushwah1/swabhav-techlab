import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  public students: Array<Student> = new Array<Student>();
  hiddenElement = true;
  constructor() {}
  display() {
    this.hiddenElement = false;
    this.students.push(new Student('ankit', 8, new Date(), ''));
    this.students.push(new Student('rahul', 7, new Date(), ''));
    this.students.push(new Student('vikas', 5, new Date(), ''));
    this.students.push(new Student('shivam', 9, new Date(), ''));
    this.students.push(new Student('akash', 6, new Date(), ''));
  }
  ngOnInit(): void {}
}
export class Student {
  constructor(
    public fullName: string,
    public cgpa: number,
    public doj: Date,
    public color: string
  ) {}
}
