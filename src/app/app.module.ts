import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HeaderModule} from '../app/Modules/header/header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HeaderComponent} from '../app/components/header/header.component'
import {FooterComponent} from '../app/components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterBeforeComponent } from './components/footer-before/footer-before.component';
import { CopyRightComponent } from './components/copy-right/copy-right.component';
import { CardComponent } from './components/card/card.component';
 import { CategoryComponent } from './components/category/category.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginComponent } from './Admin/Components/login/login.component';
import { RegisterComponent } from './Admin/Components/register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    FooterBeforeComponent,
    CopyRightComponent,
    CardComponent,
    CategoryComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // HeaderModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
