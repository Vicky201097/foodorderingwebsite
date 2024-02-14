import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication service/authentication.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  myForm: FormGroup | any;
  tableData: any[] = [];
  foodData:any = [];
  
  constructor(private formBuilder: FormBuilder,
  private router: Router, private dataService: AuthenticationService,private dialog: MatDialog){
    this.foodData = dataService.fooddata;
    console.log(this.foodData);
    }
  

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      // Define your form controls here
      foodName: ['', Validators.required],
      Quantity: ['', Validators.required]
      // Add more controls as needed
    });
    this.tableData = this.dataService.tableDatas;
  }
  onSubmit() {
    if (this.myForm.valid) {
      // Form is valid, handle submission logic here
      let formData = this.myForm.value;
      const foodSelected  = this.foodData.find((item:any) => item.id == formData.foodName);
      if(formData.Quantity > foodSelected.quantityInHand){
        return;
      }
      formData = {
        ...formData,
        rate: foodSelected.amount,
        amount: formData.Quantity*foodSelected.amount,
        name: foodSelected.name
      };
      this.tableData.push(formData);
      this.dataService.tableDatas = this.tableData;
      this.dataService.addItem(formData);
      this.myForm.reset();
      console.log('Form submitted:', formData);
    } else {
      // Form is invalid, display validation errors
      console.log('Form is invalid');
    }
  }

  deleteItem(data: any, i: any){
    console.log(data, i);
    this.tableData.splice(i,1);
    this.dataService.removeFoodData(data);
    this.dataService.tableDatas = this.tableData;
  }

  get totalAmount(){
    return this.tableData.reduce((acc, curr) => {
      return acc + curr.amount;  
    },0);
  }
  
  navigate(){
    this.router.navigate(['/billvalue']);
  }
  cancel(){
    this.tableData.forEach((data, i) => {
      this.dataService.removeFoodData(data)
    });
    this.tableData= [];
  }

  openPopUp(){
    data: [{ name: 'Dosa', Quantity: 20 },
    {name:'Idly',Quantity:30},
    { name: 'Chappathi', Quantity: 15 },
    {name:'Parotta',Quantity:25},
    { name: 'Appam', Quantity: 40 }]
  
  }

}
