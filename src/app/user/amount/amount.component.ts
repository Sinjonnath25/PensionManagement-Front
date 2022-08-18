import { environment } from 'src/environments/environment';
import { Pension } from './../../model/pension';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { first, map, Subscriber } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { ProcessPensionServiceService } from 'src/app/service/process-pension-service.service';
import Swal from 'sweetalert2';
import { GetPensionDetailsService } from 'src/app/service/get-pension-details.service';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {
  aadhar!: String;
  responseMsg!: string;
  errMsg!:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private getPensionDetailsService:GetPensionDetailsService,
    private pensionDetais:Pension
  ) { }

  ngOnInit(): void {
  }

  submit(f:any){
    this.responseMsg = "";
    this.errMsg = "";
    console.log(f)
    this.aadhar = f.value.aadharNo
    console.log("url:"+environment.pensionDetails+this.aadhar);
    this.getPensionDetailsService.getPensionDetails(this.aadhar)
      .pipe(first())
      .subscribe((res:any)=>{
          console.log("response is"+res)
          if(res.status==200 && res.data !=null){
            console.log(res)
            this.pensionDetais.aadharNo=res.data.aadharNo;
            this.pensionDetais.bankServiceCharge=res.data.bankServiceCharge;
            this.pensionDetais.pensionAmount=res.data.pensionAmount;
            console.log(this.pensionDetais)
            this.responseMsg = "Pension amount for Aadhar No "+this.pensionDetais.aadharNo+" is Rs."+this.pensionDetais.pensionAmount+", Required Bank Service Charge Will be Rs."+this.pensionDetais.bankServiceCharge;
          }
          else{
            console.log(res);
            this.errMsg = res.message;
          }
        },
        error=>{
          console.log(error)
        }
      )
  }

}
