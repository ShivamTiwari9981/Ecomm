import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ILogin } from '../../Interface/ILogin';
import {ResponseService} from '../../../Service/response.service'
import { Router } from '@angular/router';
import { Response } from '../../Interface/Response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  res:Response|any;
  constructor(public response:ResponseService,private router: Router){}
  loginForm = new FormGroup({
    userName: new FormControl(''),
    userPassword: new FormControl(''),
  });
  SubmitForm(){
    let model:ILogin={
      UserName:this.loginForm.value.userName??"",
      UserPassword:this.loginForm.value.userPassword??"",
    }
    this.response.PostResponse("/",model).subscribe(
      (response) => { this.res = response;
        if(this.res.status==true)
        {
           this.router.navigate(['/appcomponents'])
        }
        else{
          alert("Invalid user name or password")
        }
        console.log(this.res)
       });
  }
}
