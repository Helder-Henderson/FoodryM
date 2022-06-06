import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})

export class IndexComponent implements OnInit {
  
  ID_MODAL_ENTERPRISE : string = "MEnterprise";
  form: FormGroup;

  constructor(private router: Router, public modalController : ModalController, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.InitModelController()
    this.initFormRegister();
  }

  InitModelController() {
    this.modalController.create({
      component: IndexComponent
    });
  }  
  
  initFormRegister(): void {
    this.form = this.formBuilder.group({
      cnpj: [null, [Validators.minLength(14),Validators.maxLength(14), Validators.required]]
    })
  }


  AccessRedirect(accessCode : string ) {
    console.log(accessCode)
  }

  EnterpriseRedirect(idModal : string, data: FormGroup) {
    console.log(this.form.value.cnpj)

    if(this.form.valid) {
      //service -> verificar se cnpj está cadastrado 
      this.router.navigateByUrl('register')
      this.modalController.dismiss(idModal).then(x => {
        this.modalController.dismiss(idModal)
      }).catch(x => {
        console.log("catch" + x)
      });
    }
  }

}
