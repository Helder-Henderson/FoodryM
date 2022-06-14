import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminService } from '../admin-service.service';
import { ItemDetailComponent } from './details/item-detail/item-detail.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private modalController: ModalController, private service: AdminService) { }


  menu: Array<any>;


  ngOnInit() {
    this.getDataMenu()
  }

  
  async openModalDetails(id : any) {


    const modal = await this.modalController.create({
      component: ItemDetailComponent,
      componentProps : {
        data:this.menu,
        id: id,
        modal: this.modalController
      }
    });
    
    return modal.present()
    
  }

  getDataMenu() {
    this.service.GetAllAvailableFood('1', { "Available": "" }).subscribe({
      next: (response) => {
        this.menu = response;
      }
    })
  }


}
