import { Component, OnDestroy, OnInit } from '@angular/core';
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


  constructor(private router: Router, private formBuilder: FormBuilder, public modalController: ModalController, private toastComponent: ToastComponent) { }

  ngOnInit() {
    this.InitModelController()
    this.initForms();
  }

  mascaraCnpj() {
    var v = this.formEnterprise.controls.cnpj.value
    v = v.replace(/\D/g, ""); //Remove tudo o que n�o � d�gito
    v = v.replace(/^(\d{2})(\d)/, "$1.$2"); //Coloca ponto entre o segundo e o terceiro d�gitos
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3"); //Coloca ponto entre o quinto e o sexto d�gitos
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2"); //Coloca uma barra entre o oitavo e o nono d�gitos
    v = v.replace(/(\d{4})(\d)/, "$1-$2"); //Coloca um h�fen depois do bloco de quatro d�gitos
    this.formEnterprise.controls.cnpj.setValue(v);
  }

  InitModelController() {
    this.modalController.create({
      component: IndexComponent
    });
  }

  initForms(): void {
    this.formEnterprise = this.formBuilder.group({
      cnpj: [null, [Validators.minLength(18), Validators.maxLength(18), Validators.required]]
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

  resetForms() {
    this.formPassword.reset()
    this.formEnterprise.reset()
  }

  EnterpriseAuthentication() {
    if (this.formPassword.valid) {
      // autentica cadastro
      if (true) {
        this.modalController.dismiss();
        this.resetForms(); // Isso deveria existir depois dos dados serem enviados para a service.
        this.router.navigateByUrl("home/dashboard");
      }
      else {
        this.toastComponent.presentToast('Senha incorreta!', 3000);
      }
    }
  }

}
