import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl?: string;
  error = '';
  registerData!: User; 
  registerButtonText!:string;
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
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.registerButtonText="Register";
  }

  submit(f:any){
    this.clicked = true;
    console.log(f.value)
    this.registerButtonText="Registering ...";
    this.registerData = f.value
    this.authenticationService.register(this.registerData)
      .pipe(first())
      .subscribe(
        res=>{
          this.clicked = false;
          this.registerButtonText="Register";
          if(res.status==200){
            Swal.fire("Done",res.message, 'success');
          }
          else{
            Swal.fire("Done",res.message, 'error');
          }
          console.log(res)
        },
        error=>{
          this.clicked = false;
          this.registerButtonText="Register";
          console.log(error)
          Swal.fire("Done",error, 'error');
        }
      )
    //window.location.reload();
  }


}
