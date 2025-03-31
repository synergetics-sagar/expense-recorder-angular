import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AuthService } from '../services/auth.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-profile',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  
  user: any = {
    name: "",
    email: ""
  }
  constructor(private as: AuthService){}

  ngOnInit(){
    this.as.getProfile()
    .subscribe({
      next: (res: any)=>{
        this.user = res.foundUser
      },
      error: (error)=>console.log(error)
    })
  }

  handleLogout(){
    this.as.logout()
  }
}
