import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastComponent } from '../../components/toast/toast.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})

export class IndexComponent implements OnInit {

  isModalOpenEnterprise: string = "false";
  isModalOpenPassword: string = "false";
  formEnterprise: FormGroup;
  formPassword: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,public modalController : ModalController, private toastComponent: ToastComponent) { }

  ngOnInit() {
    this.InitModelController()
    this.initForms();
  }

  InitModelController() {
    this.modalController.create({
      component: IndexComponent
    });
  }  

  initForms(): void {
    this.formEnterprise = this.formBuilder.group({
      cnpj: [null, [Validators.minLength(14), Validators.maxLength(14), Validators.required]]
    });
    this.formPassword = this.formBuilder.group({
      password: [null, [Validators.minLength(8), Validators.required]]
    });
  }

  setIsModalOpenEnterprise(status: string) {
    this.isModalOpenEnterprise = status;
  }

  setIsModalOpenPassword(status: string) {
    this.isModalOpenPassword = status;
  }

  AccessRedirect(accessCode: string) {
    console.log(accessCode)
  }

  EnterpriseValidation() {
    if (this.formEnterprise.valid) {
      //service -> verificar se cnpj está cadastrado 
      this.setIsModalOpenEnterprise('false');
      if (true) {
        this.setIsModalOpenPassword('true');
      }
      else {
        this.modalController.dismiss();
        this.router.navigateByUrl('register');
      }
    }
  }

  EnterpriseAuthentication() {
    if (this.formPassword.valid) {
      // autentica cadastro
      if (true) {
        this.modalController.dismiss();
        this.router.navigateByUrl("home/dashboard");
      }
      else {
        this.toastComponent.presentToast('Senha incorreta!', 3000);
      }
    }
  }

}
