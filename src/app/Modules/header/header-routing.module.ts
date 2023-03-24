import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
const routes: Routes = [
 {path: '',pathMatch: 'full',redirectTo: 'header'},
  {path: 'header',component: HeaderComponent},
  {path: 'footer',component: FooterComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
