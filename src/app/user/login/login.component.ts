import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;
  error = '';
  registerData!: User; 
  loginButtonText!:string;
  clicked = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService
  ) { 
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
    }

  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.loginButtonText="Login";
  }

  submit(f:any){
    console.log(f);
    this.clicked=true;
    this.loginButtonText="Logging In...";
    this.registerData = f.value
    this.authenticationService.login(this.registerData)
      .pipe(first())
      .subscribe(
        res=>{
          this.loginButtonText="Login";
          this.clicked=false;
          console.log("response is"+res)
          if(res.status==200 && res.data !=null){
            this.router.navigate(['dashboard']);
            //this.login.loginStatusSubject.next(true);
          }
          else{
            this.loginButtonText="Login";
            console.log(res);
        Swal.fire('Error !!', 'Please Enter correct Details !!', 'error');
          }
          console.log(res)
        },
        error=>{
          this.loginButtonText="Login";
          console.log(error)
          this.clicked=false;
        }
      )
    //window.location.reload();
  }


}
