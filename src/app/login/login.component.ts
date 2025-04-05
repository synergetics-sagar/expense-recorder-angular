import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [
    MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  myForm: FormGroup
  constructor(private as: AuthService, private router: Router){
    this.myForm = new FormGroup({
      email: new FormControl("sagar@example.com"),
      password: new FormControl("123123")
    })
  }

  handleSubmit(){
    const {email, password} = this.myForm.value
    this.as.login(email, password)
  }
  
}
