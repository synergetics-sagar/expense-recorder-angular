import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./services/auth.service";
import { AuthorityService } from "./services/authority.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private authorityService: AuthorityService,private as: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.authorityService.shouldSkipAuth(req.url)){
            return next.handle(req)
        }
        else{
            const token = this.as.getToken()
            console.log(token)
            if(token){
                const authReq = req.clone({
                    headers: req.headers.set("Authorization", token)
                })
    
                return next.handle(authReq)
            }
            else{
                throw new Error("Method not implemented.");
            }
        }
        
    }
    
}