import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { first, map, Subscriber } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { ProcessPensionServiceService } from 'src/app/service/process-pension-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aadhar',
  templateUrl: './aadhar.component.html',
  styleUrls: ['./aadhar.component.css']
})
export class AadharComponent implements OnInit {

  aadhar!: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private processPensionServiceService:ProcessPensionServiceService
    
  ) { }

  ngOnInit(): void {
  }

  submit(f:any){
    console.log(f.value)
    this.aadhar = f.value
    this.processPensionServiceService.processPension(this.aadhar)
      .pipe(first())
      .subscribe(res=>{
          console.log("response is"+res)
          if(res.status==200 && res.data !=null){
            //this.router.navigate(['aadhar']);
            //this.login.loginStatusSubject.next(true);
          }
          else{
            //alert(res.message)
            console.log(res);
     //   Swal.fire('Error !!', 'Please Enter correct Details !!', 'error');
          }
          console.log(res)
        },
        error=>{
          console.log(error)
        }
      )
    //window.location.reload();
  }

}
