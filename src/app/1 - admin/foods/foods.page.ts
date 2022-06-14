import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonRouterOutlet, ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AdminService } from '../admin-service.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {

  formFood: FormGroup;

  constructor(private formBuilder: FormBuilder, public routerOutlet: IonRouterOutlet, public modalController : ModalController, private adminService : AdminService) { }

  ngOnInit() {
    this.initForms()
  } 

  initForms(): void {
    this.formFood = this.formBuilder.group({
      name: [null, [Validators.minLength(1), Validators.maxLength(50), Validators.required]],
      price: [null, [Validators.required]],
      time: [null, [Validators.required]],
      note: [null, [Validators.maxLength(300)]]
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  AddFood(data : any)
  {
    console.log(data)
    const dataSend =  {
      "name":data.name,
      "price":data.price,
      "time": data.time,
      "description": data.note
    }
    
    this.adminService.postFood(dataSend)
  }

}
