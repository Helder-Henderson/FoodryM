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

  constructor(private formBuilder: FormBuilder, public routerOutlet: IonRouterOutlet, public modalController: ModalController) { }

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

  mascaraTime() {
    var v = this.formFood.controls.time.value
    v = v.replace(/\D/g, "");
    this.formFood.controls.time.setValue(v);
  }

  mascaraPrice() {
    var v = this.formFood.controls.price.value
    v = v.replace(/\D/g, "");
    v = v.replace(/0*/, "");
    v = this.pad(v, 3);
    v = v.replace(/(\d)(\d{2}$)/, "$1,$2");
    this.formFood.controls.price.setValue(v);
  }

  pad(num: string, size: number): string {
    if (num == '') {
      return '';
    }
    while (num.length < size) num = "0" + num;
    return num;
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  AddFood() {
    if (this.formFood.valid) {
      // Cadastra Prato
    }
  }

}
