import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-post-login-wrapper',
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './post-login-wrapper.component.html',
  styleUrl: './post-login-wrapper.component.css'
})
export class PostLoginWrapperComponent {

  constructor(private as: AuthService){}
  
  handleLogout(){
    this.as.logout()
  }
}
