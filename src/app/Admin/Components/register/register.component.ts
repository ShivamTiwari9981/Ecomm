import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseService } from 'src/app/Service/response.service';
import { User } from '../../Interface/User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  res:Response|any;
  constructor(public response:ResponseService,private router: Router){}
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userPassword: new FormControl(''),
    email: new FormControl(''),
  });
  SignUP(){
    let model:User={
      FirstName:this.registerForm.value.firstName??"",
      LastName:this.registerForm.value.lastName??"",
      UserPassword:this.registerForm.value.userPassword??"",
      Email:this.registerForm.value.email??"",
      Type:"A",
    }
    this.response.PostResponse("/Account/signup",model).subscribe(
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
