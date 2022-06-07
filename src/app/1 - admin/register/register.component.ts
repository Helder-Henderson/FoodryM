import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegister } from '../models/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form: FormGroup;

  ngOnInit() {
    this.initFormRegister();
  }

  initFormRegister(): void {
    this.form = this.formBuilder.group({
      cnpj: [null, [Validators.minLength(14),Validators.maxLength(14), Validators.required]],
      password: [null, [Validators.minLength(8), Validators.required]],
      fantasyName: [null, [Validators.minLength(4), Validators.required]],
      phone: [null],
      email: [null, [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    })
  }

  register(data: IRegister): void {
    if (this.form.valid) {
      this.router.navigateByUrl("home/dashboard")
    }
    // registraEmpresa
    // Se tudo certo então 
    // se tudo errado manda pro form mostrar que deu merda


  }

}
