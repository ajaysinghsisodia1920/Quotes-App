import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  email= new FormControl("",[
    Validators.required,
    Validators.email
   ])
   password = new FormControl("",[
    Validators.required,
    Validators.minLength(6)
   ])
 
   registerForm = new FormGroup({
     email:this.email,
     password:this.password
   })
 
 
   register(){
     console.log(this.registerForm.value)
    //  this.router.navigate(['/login'])
     this.authService.register(this.registerForm.value.email!,this.registerForm.value.password!);
    //  this.authService.login(this.loginForm.value.email,this.loginForm.value.password)
   }
 
   reset(){
     this.registerForm.reset()
   }

}
