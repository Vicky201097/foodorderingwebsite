import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthenticationService } from "../authentication service/authentication.service";


@Component({
    selector: 'food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.scss']
  })
  export class FoodComponent {


    foods: any[] = [];
    food: any = {};
    isEditMode = false;
    selectedItem: any;
    item: any;
    activeIndex = -1;
    isNew = false;
  
    isRoute = false;
    constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {
      this.foods = authenticationService.fooddata;
     }
  
    submitForm() {
  
      if (this.food.name && this.food.amount && this.food.quantityInHand) {
        if (this.activeIndex >= 0) {
          this.foods[this.activeIndex] = Object.assign(this.food);
        } else {
          this.foods.push({ ...this.food });
        }
        this.food = {};
        this.selectedItem = -1;
      } else {
        alert('Please fill in all fields.');
      }
    }
  
    editItem(item: any, i: any) {
      this.isEditMode = true;
      this.food = Object.assign({}, item);
      this.activeIndex = i;
    }
  
    addItem() {
      if (this.isEditMode) {
        this.isEditMode = false;
      }
    }
  
    deleteItem(index: number) {
      this.foods.splice(index, 1);
    }






























    // foodData:any = [];
    // onEdit = false;
    // activeIndex = -1;
    // isNew = false;
    // popupmessage = "";
    
    // constructor(private formBuilder: FormBuilder,private router: Router, private dataService: AuthenticationService){
    //   this.foodData = dataService.fooddata;
    // }

    // edit(item: any, i: any){
    //   if(this.isNew){
    //     let popup = document.getElementById("myPopup");
    //     this.popupmessage = "Complete adding the food details before editing...";
    //     popup?.classList.add("show");
    //     setTimeout(() => {
    //       popup?.classList.remove("show");
    //       this.popupmessage = "";
    //     }, 3000);
    //     return;
    //   }
    //   this.onEdit = true;
    //   this.activeIndex = i;
    // }
    // save(item: any, i: any){
    //   if(this.isNew){
    //     let datas = this.foodData.filter((item: any) => {
    //       return item.name?.toLowerCase() == this.foodData[this.activeIndex].name.toLowerCase();
    //     });
    //     if(datas.length>1){
    //       let popup = document.getElementById("myPopup");
    //       this.popupmessage = "Food Name already exists!!";
    //       popup?.classList.add("show");
    //       setTimeout(() => {
    //         popup?.classList.remove("show");
    //         this.popupmessage = "";
    //       }, 3000);
    //       return;
    //     }
    //     const lId = this.foodData.reduce((acc: any, cur: any) => {
    //       return cur?.id && cur.id > acc?cur.id:acc;
    //     },0);
    //     this.foodData[i] = {
    //       ...this.foodData[i],
    //       id: lId+1,
    //       amount: parseInt(this.foodData[i].amount),
    //       quantityInHand: parseInt(this.foodData[i].quantityInHand)
    //     }
    //     this.isNew = false;
    //   }
    //   this.onEdit = false;
    //   this.activeIndex = -1;
    // }
    // addNewFood(){
    //   this.activeIndex = this.foodData.push({})-1;
    //   console.log(this.activeIndex);
    //   this.isNew = true;
    //   this.onEdit = true;
    // }

    // get isDatafilled(){
    //   return this.activeIndex && (this.foodData[this.activeIndex].name !== '' && this.foodData[this.activeIndex].amount > 0 && this.foodData[this.activeIndex].quantityInHand > 0);
    // }

    
}

