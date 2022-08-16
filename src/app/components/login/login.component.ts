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
  public msg: string;
  public errors: string[];
  private userModel: User;

  constructor(private authService: AuthService,
    private router: Router) { 
      this.msg = "";
      this.errors = [];
      this.userModel = new User("", "");
    }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {    
    // process-login
    this.userModel.username = form.value.username;
    this.userModel.password = form.value.password;
    this.authService.login(this.userModel)
      .subscribe(
        // if login was successful
        data => {
          this.authService.setSession(data);
          this.router.navigateByUrl("pensionDetails");
        },
        // if login failed, display the error
        error => {
          console.log(error)
          try {
            this.errors = JSON.parse(error.error).errors;
            console.log(error.error)
          } catch (error) {
            this.msg = "Service is down, please try again later..."
            console.log(this.msg);
          }
        }
      );
    
  }

}
