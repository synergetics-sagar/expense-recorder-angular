import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginApi, profileApi } from '../globals';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(email: String, password: String){
    return this.http.post(loginApi, {email, password}).subscribe({
      next: (res: any)=>{
        const {token} = res
        this.setToken(token)
        this.router.navigate(["/app/expenses"])
      },
      error: (error)=>console.log(error)
    })
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigate(["/login"])
  }

  getProfile(){
    return this.http.get(profileApi, {
      headers: {
        "Authorization": this.getToken()!
      }
    })
  }

  setToken(token: string){
    localStorage.setItem("token", token)
  }

  getToken(){
    return localStorage.getItem("token")
  }

  isLoggedIn(){
    if(this.getToken()){
      return true
    }
    return false
  }
}
