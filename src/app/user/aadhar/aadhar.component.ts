import { Pension } from './../../model/pension';
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
  responseMsg!: string;
  errMsg!:string;
  load!:string;
  clicked = false;
  submitButtonText="Process";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private processPensionServiceService:ProcessPensionServiceService,
    private pensionDetais:Pension
  ) { }

  ngOnInit(): void {
  }

  submit(f:any){
    this.submitButtonText = "Loading...";
    this.clicked = true;
    console.log(f.value);
    this.load="Procesing Penion In Progress...";
    this.aadhar = f.value;
    this.processPensionServiceService.processPension(this.aadhar)
      .pipe(first())
      .subscribe(res=>{
        this.submitButtonText = "Process"
        this.clicked = false;
          console.log("response is"+res)
          if(res.status==200 && res.data !=null){
            console.log(res)
            this.load="";
            this.responseMsg = res.message;
            this.pensionDetais.aadharNo=res.data.aadharNo;
            this.pensionDetais.bankServiceCharge=res.data.bankServiceCharge;
            this.pensionDetais.pensionAmount=res.data.pensionAmount;
            Swal.fire("Done",this.responseMsg, 'success');
            console.log(this.pensionDetais)
          }
          else{
            console.log(res);
            this.load="";
            this.errMsg = res.message;
            Swal.fire("Oops!",this.errMsg, 'error');
          }
        },
        error=>{
          this.clicked = false;
          this.submitButtonText = "Process"
          console.log(error)
          Swal.fire("Oops!",error, 'error');
        }
      )
    //window.location.reload();
  }

  goBack(){
    this.router.navigateByUrl('dashboard')
  }

}
