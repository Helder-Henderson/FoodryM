import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AdminService } from 'src/app/1 - admin/admin-service.service';
import { ItemDetailComponent } from 'src/app/1 - admin/menu/details/item-detail/item-detail.component';

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.page.html',
  styleUrls: ['./menu-client.page.scss'],
})
export class MenuClientPage implements OnInit {
  public idRestaurant: string;
  public listFoods: Array<any>;

  constructor(private activatedRoute: ActivatedRoute, private service: AdminService, private modalController: ModalController) { }

  ngOnInit() {
    this.idRestaurant = this.activatedRoute.snapshot.paramMap.get('idRestaurant');
    this.service.GetFoodsByRestaurant(this.idRestaurant).subscribe({
      next: (response: Array<any>) => {
        this.listFoods = response;
        return;
      }
    })
  }


  async openModalDetails(id: any) {

    for (var i = 0; i < this.listFoods.length; i++) {
      // Corpo do laço de repetição
      if (this.listFoods[i].Id == id) {
        const modal = await this.modalController.create({
          component: ItemDetailComponent,
          componentProps: {
            data: this.listFoods[i],
            id: id,
            modal: this.modalController
          }
        });

        return modal.present()
      }
    }
  }
}
