import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication service/authentication.service';


@Component({
  selector: 'loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss']
})
export class LoginPageComponent {

  login:FormGroup;
  year;
  valid = true;
  islogged=false;
  currUser: { name: string; password: string; type: string; } | undefined;

constructor(private formBuilder: FormBuilder,private router: Router, private dataService: AuthenticationService){
  this.year = (new Date()).getFullYear();
  this.login = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
}

onSubmit() {
  if (this.login.valid) {

  if(this.valid = this.dataService.log(this.login.value)){
      // localStorage.setItem('food',JSON.stringify(foodList))
      if(this.dataService.getType == 'admin'){
        this.router.navigate(['/home']);
      }else{
        this.router.navigate(['/billing']);
      }
    }
  }
}
ngOnInit(){

  this.dataService.isloggedData.subscribe(value=>
    {
      this.islogged=value;
      if(this.islogged){
        if(this.dataService.getType == 'admin'){
          this.router.navigate(['/home']);
        }else{
          this.router.navigate(['/billing']);
        }
      }
    })
    ;
  
}


}