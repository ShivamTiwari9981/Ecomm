import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Admin/Components/register/register.component';
import { LoginComponent } from './Admin/Components/login/login.component';

const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"signup",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
