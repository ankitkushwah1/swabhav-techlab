import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { JazComponent } from './jaz/jaz.component';

@NgModule({
  declarations: [BarComponent, JazComponent],
  imports: [CommonModule],
  exports: [BarComponent, CommonModule, JazComponent],
})
export class FooModule {}
