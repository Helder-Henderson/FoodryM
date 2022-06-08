import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private modalController: ModalController) { }




  ngOnInit() {

  }

  async createModal(props: object) {
    await this.modalController.create({
      component: DetailsComponent,
      componentProps: {
        data: props
      }
    });
  }


  showDetailsItem(name: string, time: string, value: string, url: string, id: number) {
    const props = {
      "name": name,
      "time": time,
      "value": value,
      "url": url,
      "id": id
    }

    this.createModal(props).then()
  }

}
