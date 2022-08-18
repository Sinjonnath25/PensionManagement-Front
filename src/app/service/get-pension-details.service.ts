import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetPensionDetailsService {

  constructor(private http: HttpClient) { }

  // Method to get the pension details
  getPensionDetails(data:any) {
    return this.http.get<any>(environment.pensionDetails+`${data}`)
    .pipe(map(response => {
      console.log(response);    
      return response;
    }));
  }


}
