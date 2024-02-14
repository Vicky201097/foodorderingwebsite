import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication service/authentication.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  foodData: any = [];

  constructor(private router: Router, private dataService: AuthenticationService){
    this.foodData = dataService.fooddata;
  }

  navigate(){
    this.router.navigate(['/billing']);
  }
}