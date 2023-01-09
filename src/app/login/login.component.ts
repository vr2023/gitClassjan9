import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginFb:any;
  constructor(private router:Router){

  }

  ngOnInit() {
    this.createForm();
   
  }
 
  createForm(){
    this.loginFb = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    })
  }

  login(){
    console.log(this.loginFb.value);

  }
  

}
