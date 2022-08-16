import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pension';
  authService: AuthService | undefined
  constructor(authService: AuthService){
    this.authService = authService
  }

  logout(){
    if(this.authService?.logout()){
      alert("User Logged out");
    }
    else{
      alert("Logout Unsuccessfull")
    }
  }

}
