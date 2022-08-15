import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcessPensionServiceService {



  baseUrl: string = 'http://localhost:9092'

  constructor(private http: HttpClient) { }

  // Method to process the pension
  


  // processPension(data:any) {
  //   return this.http.post<any>(`${this.baseUrl}/processPension`,  data )
  //   .pipe(map(response => {
  //     console.log(response);
  //     // login successful if there's a jwt token in the response
      

  //     return response;
  //   }));
  // }

  // Method to get pension details
  
}
