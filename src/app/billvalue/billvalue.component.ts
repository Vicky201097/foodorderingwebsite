import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication service/authentication.service';

@Component({
  selector: 'billvalue',
  templateUrl: './billvalue.component.html',
  styleUrl: './billvalue.component.scss'
})
export class BillvalueComponent {

  showQuantity = false;
  quantity = 0;
  tableData: any[] = [];

  constructor(private dataService: AuthenticationService){
    this.tableData = this.dataService.tableDatas;
    console.log(this.tableData);
  }

  get totalAmount(){
    return this.tableData.reduce((acc, curr) => {
      return acc + curr.amount;  
    },0);
  }
}
