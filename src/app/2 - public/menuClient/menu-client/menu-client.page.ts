import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/1 - admin/admin-service.service';

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.page.html',
  styleUrls: ['./menu-client.page.scss'],
})
export class MenuClientPage implements OnInit {
  public idRestaurant: string;
  public listFoods: Array<any>;

  constructor(private activatedRoute: ActivatedRoute, private service: AdminService) { }

  ngOnInit() {
    this.idRestaurant = this.activatedRoute.snapshot.paramMap.get('idRestaurant');
    this.service.GetFoodsByRestaurant(this.idRestaurant).subscribe({
      next: (response: Array<any>) => {
        this.listFoods = response;
        return;
      }
    })
    console.log(this.listFoods)
  }

  getfoods() { }

}
