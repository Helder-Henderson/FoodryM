import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { AdminService } from '../admin-service.service';
import { IRegister } from '../models/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private service: AdminService) { }

  form: FormGroup;

  ngOnInit() {
    this.initFormRegister();
  }

  mascaraCnpj() {
    var v = this.form.controls.cnpj.value
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
    this.form.controls.cnpj.setValue(v);
  }

  mascaraPhone() {
    var v = this.form.controls.phone.value
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    this.form.controls.phone.setValue(v);
}

  initFormRegister(): void {
    this.form = this.formBuilder.group({
      cnpj: [null, [Validators.minLength(18),Validators.maxLength(18), Validators.required]],
      password: [null, [Validators.minLength(8), Validators.required]],
      fantasyName: [null, [Validators.minLength(4), Validators.required]],
      phone: [null, [Validators.minLength(15),Validators.maxLength(15)]],
      email: [null, [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    })
  }

  register(data): void {
    if (this.form.valid) {

      var reg: IRegister = {
      cnpj : data.cnpj.value.replace(/\D/g, ""),
      password : data.password.value,
      fantasyName : data.fantasyName.value,
      phone : data.phone.value.replace(/\D/g, ""),
      email : data.email.value
      }

      console.log(this.service.PostRestaurant(reg));

      // this.router.navigateByUrl("home/dashboard")
    }
    // registraEmpresa
    // Se tudo certo então 
    // se tudo errado manda pro form mostrar que deu merda


  }

}
