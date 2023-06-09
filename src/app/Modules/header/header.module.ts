import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  declarations: [
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    ReactiveFormsModule
  ]
})
export class HeaderModule { }
