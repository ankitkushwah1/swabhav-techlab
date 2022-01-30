import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './Welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { GreetComponent } from './greet/greet.component';
import { LoopingComponent } from './looping/looping.component';
import { StudentComponent } from './student/student.component';
import { SnakePipe } from './snake.pipe';
import { StudentsComponent } from './students/students.component';
import { DisplayPipe } from './display.pipe';
import { ProductItemComponent } from './products/product-item.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { RaitingComponent } from './raiting/raiting.component';
import { GalleryComponent } from './gallery/gallery.component';

import { NumberApiComponent } from './number-api/number-api.component';
import { TowayBindingComponent } from './toway-binding/toway-binding.component';
import {
  FormsModule,
  NG_VALIDATORS,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooModule } from './foo/foo.module';

@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    GreetComponent,
    LoopingComponent,
    StudentComponent,
    SnakePipe,
    StudentsComponent,
    DisplayPipe,
    ProductItemComponent,
    ProductListComponent,
    RaitingComponent,
    GalleryComponent,

    NumberApiComponent,
    TowayBindingComponent,
    DropdownComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FooModule,
  ],
  providers: [ProductService],
  bootstrap: [WelcomeComponent],
})
export class AppModule {}
