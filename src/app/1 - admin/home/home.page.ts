import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pages = [
    {title: 'Painel de Controle',
    url: '/home/dashboard',
    icon: 'clipboard'
    },
    {
      title: 'Comidas',
      url: '/home/foods',
      icon: 'fast-food'
    },
    {
      title: 'Cardápio',
      url: '/home/menu',
      icon: 'list'
    },
    {
      title: 'Sair',
      url: '/exit',
      icon: 'exit'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
