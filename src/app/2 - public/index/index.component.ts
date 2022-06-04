import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})

export class IndexComponent implements OnInit {

  constructor(private router: Router, public modalController : ModalController) { }

  ID_MODAL_ENTERPRISE : string = "MEnterprise";

  ngOnInit() {
    this.InitModelController()
  }

  InitModelController() {
    this.modalController.create({
      component: IndexComponent
    });
  }


  AccessRedirect(accessCode : string ) {
    console.log(accessCode)
  }

  EnterpriseRedirect(id : string, cnpj : string, password : string = "") {
    console.log(`${cnpj} , ${password}`)
    
    //service -> cnpj está cadastrado 

    var isValid = false;

    if(!isValid) {
      this.router.navigateByUrl('register').then(x => {
        this.modalController.dismiss(id)
      }).catch(x => {
        console.log("catch" + x)
      });
    }
  }

}
