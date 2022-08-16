import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string;
  // public errors: string[];
  
  error: boolean;
  constructor(private authService: AuthService,
    private router: Router) { 
      this.msg = "";
      // this.errors = [];
      this.error = false;
    }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {    
    // process-login
    let user  = new User(form.value.username, form.value.password);    
    this.authService.login(user)
      .subscribe(
        // if login was successful
        data => {
          this.error = false;
          this.authService.setSession(data);
          this.router.navigateByUrl("pensionDetails");
        },
        // if login failed, display the error
        error => {
          this.error = true;
          console.log("Showing error");
          console.log(error);
          console.log(error.status);
          // try {
            // this.errors = JSON.parse(error.error).errors;
          if(error.status == 404)
          {
            console.log("Service down?");
            this.msg = "Service is unavailable";
            // console.log(this.msg);
          }
          else {
          // } catch (error) {           
            this.msg = JSON.parse(error.error).message;
            // console.log("Showing error.error");
            // console.log(error.error);
          }
          // }
        }
      );
    
  }

}
