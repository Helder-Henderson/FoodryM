import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonRouterOutlet, ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {

  formFood: FormGroup;

  constructor(private formBuilder: FormBuilder, public routerOutlet: IonRouterOutlet, public modalController : ModalController) { }

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

  AddFood()
  {
    if (this.formFood.valid) {
      // Cadastra Prato
    }
  }

}
