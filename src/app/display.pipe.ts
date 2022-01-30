import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { reduce } from 'rxjs';
import { Student } from './students/students.component';

@Pipe({
  name: 'display',
})
export class DisplayPipe implements PipeTransform {
  transform(cgpa: number): String {
    if (cgpa < 6) {
      return 'red';
    } else if (cgpa < 8) {
      return 'yellow';
    } else {
      return 'green';
    }
  }
}
