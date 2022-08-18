import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }
    
    
        canActivate(): boolean {  
            if (!this.authenticationService.gettoken()) {  
                this.router.navigate(['/userlogin']);  
            }  
            return this.authenticationService.gettoken();  
        }
}