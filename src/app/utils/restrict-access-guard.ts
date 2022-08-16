import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
	providedIn: 'root'
  })
  export class RestrictAccessGuard implements CanActivate {
	constructor(
	  private authService: AuthService,
	  private router: Router,
	) { }
  
	canActivate(
	  route: ActivatedRouteSnapshot,
	  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.authService.isLoggedIn()) {  
		  this.router.navigateByUrl("")
		}
		return true;
	}
	
  }
  