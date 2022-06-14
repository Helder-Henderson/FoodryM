import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {

  @Input() data: any;
  @Input() id: string;
  @Input() modal: ModalController;

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

  dismissModal() {
    this.modal.dismiss();
  }


}
