import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication service/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  islogged = false;
  currUser: { name: string; password: string; type: string; } | undefined;

  constructor(private router: Router, private authService: AuthenticationService){
    authService.isloggedData.subscribe(value=>{
      this.islogged=value;
    });
    authService.currUserData.subscribe(value=>{
      this.currUser=value;
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
