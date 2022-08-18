import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // just before your class
  })
export class Pension {
    aadharNo?: string;
    bankServiceCharge?:string;
    pensionAmount?:string;
}