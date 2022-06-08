import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  pages = [{
    title: 'Painel de Controle',
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
  }]

  constructor() { }

  getPages(): Array<any> {
    return this.pages;
  }
}
