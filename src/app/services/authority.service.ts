import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService  {

  private skipAuthRequests: string[] = ["/login"]
  shouldSkipAuth(url: string): boolean{
    return this.skipAuthRequests.some(endpoint=>url.includes(endpoint))
  }
}
