import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) {}
  
  ngOnInit() {
  }

  Register(cnpj:string, password:string, fantasyName:string, phone:string, email:string){
    // registraEmpresa
    // Se tudo certo então 
      this.router.navigateByUrl("home")
  }

}
