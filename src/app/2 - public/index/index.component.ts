import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastComponent } from '../../components/toast/toast.component';
import { ModalController } from '@ionic/angular';
import { AdminService } from '../../1 - admin/admin-service.service';

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


  constructor(private router: Router, private formBuilder: FormBuilder, public modalController: ModalController, private toastComponent: ToastComponent, private service: AdminService) { }

  ngOnInit() {
    this.InitModelController()
    this.initForms();
  }

  mascaraCnpj() {
    var v = this.formEnterprise.controls.cnpj.value
    if (v != null) {
      v = v.replace(/\D/g, "");
      v = v.replace(/^(\d{2})(\d)/, "$1.$2");
      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
      v = v.replace(/(\d{4})(\d)/, "$1-$2");
      this.formEnterprise.controls.cnpj.setValue(v);
    }
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
    this.service.GetAllRestaurant().subscribe({
      next: (response: Array<any>) => {
        for (var i = 0; i < response.length; i++) {
          if (response[i].Id == accessCode) {
            this.modalController.dismiss();
            this.router.navigateByUrl("menuClient/" + accessCode);
            return;
          }
        }
        this.toastComponent.presentToast('Código inválido!', 3000);
        return;
      }
    })
  }

  resetForms() {
    this.formPassword.reset()
    this.formEnterprise.reset()
  }

  async EnterpriseValidation() {
    if (this.formEnterprise.valid) {
      let cnpj: string = this.formEnterprise.controls.cnpj.value.replace(/\D/g, "")

      this.service.GetAllRestaurant().subscribe({
        next: (response: Array<any>) => {
          for (var i = 0; i < response.length; i++) {
            if (response[i].Cnpj == cnpj) {
              this.setIsModalOpenEnterprise('false');
              this.setIsModalOpenPassword('true');
              return;
            }
          }
          this.setIsModalOpenEnterprise('false');
          this.modalController.dismiss();
          this.resetForms();
          this.router.navigateByUrl('register');
        }
      })
    }
  }

  EnterpriseAuthentication() {
    if (this.formPassword.valid) {
      let cnpj: string = this.formEnterprise.controls.cnpj.value.replace(/\D/g, "")

      this.service.GetAllRestaurant().subscribe({
        next: (response: Array<any>) => {
          for (var i = 0; i < response.length; i++) {
            if (response[i].Cnpj == cnpj) {
              if (response[i].Password == this.formPassword.controls.password.value.trim()) {
                this.modalController.dismiss();
                this.resetForms();
                this.router.navigateByUrl("home/dashboard");
                return;
              }
              else {
                this.toastComponent.presentToast('Senha incorreta!', 3000);
                return;
              }
            }
          }
        }
      })
    }
  }
}
