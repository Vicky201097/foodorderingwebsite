import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginCreds = [
    {
      name: 'Admin',
      password:'Admin@321' ,
      type: 'admin'
    },
    {
      name: 'Staff',
      password: 'Staff@123',
      type: 'staff'
    },
    {
      name: 'Worker',
      password: 'Worker@987',
      type: 'staff'
    }
  ];
  private foodData = [
    { name: 'Dosa', amount: 15, quantityInHand: 20, id: 1 },
    { name: 'Chappathi', amount: 20, quantityInHand: 15, id: 2 },
    { name: 'Parotta', amount: 12, quantityInHand: 25, id: 3 },
    { name: 'Idly', amount: 8, quantityInHand: 30, id: 4 },
    { name: 'Appam', amount: 25, quantityInHand: 40, id: 5 },
  ];

  private islogged = new BehaviorSubject(false);
  isloggedData = this.islogged.asObservable();

  private currUser = new BehaviorSubject(JSON.parse(localStorage.getItem('creds')|| '{}') as { name: string; password: string; type: string; } | undefined);
  currUserData = this.currUser.asObservable();

  private cart = new BehaviorSubject({} as any);
  cartData = this.cart.asObservable();

  private tableData: any = [];

  constructor() {
    this.currUserData.subscribe( data => {
      let tempUser = this.loginCreds.filter( cred => cred.name == data?.name && cred.password == data?.password);
      if(tempUser.length>0){
        this.islogged.next(true);
      }
    });
  }

  get getType(){
    return this.currUser.getValue()?.type;
  }

  get tableDatas(){
    return this.tableData;
  }

  set tableDatas(tableData){
    this.tableData = tableData;
  }

  addItem(data: any){
    this.foodData.forEach(item => {
      if(item.id == data.foodName){
        item.quantityInHand -= data.Quantity;
      }
    });
  }
  removeFoodData(data: any){
    this.foodData.forEach(item => {
      if(item.id == data.foodName){
        item.quantityInHand += data.Quantity;
      }
    });
  }

  get fooddata(){
    return this.foodData;
  }

  updateIsLogged(val: boolean){
    this.islogged.next(val);
  }

  log(data: any){
    console.log(data);
    let tempUser = this.loginCreds.filter( cred => cred.name == data.userName && cred.password == data.password);
    console.log(tempUser);
    if(tempUser.length>0){
      this.currUser.next(tempUser[0]);
      localStorage.setItem('creds', JSON.stringify(tempUser[0]))
      this.islogged.next(true);
      return true;
    }
    return false;
  }

  logout(){
    this.islogged.next(false);
    this.currUser.next(undefined);
    localStorage.removeItem('creds');
  }

}
