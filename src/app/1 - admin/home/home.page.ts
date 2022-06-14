import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { AdminService } from '../admin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  enterpriseName: string;
  enterpriseEmail: string;

  pages = [
    {title: 'Painel de Controle',
    url: '/home/'+this.activatedRoute.snapshot.paramMap.get('idRestaurant')+'/dashboard',
    icon: 'clipboard'
    },
    {
      title: 'Comidas',
      url: '/home/'+this.activatedRoute.snapshot.paramMap.get('idRestaurant')+'/foods',
      icon: 'fast-food'
    },
    // {
    //   title: 'Cardápio',
    //   url: '/home/'+this.activatedRoute.snapshot.paramMap.get('idRestaurant')+'/menu',
    //   icon: 'list'
    // },
    {
      title: 'Sair',
      url: '/exit',
      icon: 'exit'
    }
  ];

  constructor(private router: Router, private service: AdminService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.service.GetAllRestaurant().subscribe({
      next: (response: Array<any>) => {
        for (var i = 0; i < response.length; i++) {
          if (response[i].Id == this.activatedRoute.snapshot.paramMap.get('idRestaurant')) {
            this.enterpriseName = response[i].FantasyName
            this.enterpriseEmail = response[i].Email
            return;
          }
        }
      }
    })
  }

}
