import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcessPensionServiceService {



  baseUrl: string = 'http://localhost:9092'

  constructor(private http: HttpClient) { }

  // Method to process the pension
  


  processPension(data:any) {
    return this.http.post<any>(environment.processPension,  data )
    .pipe(map(response => {
      console.log(response);    

      return response;
    }));
  }

  // Method to get pension details
  
}
