import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegister } from './models/IRegister';

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


  baseUrl = `https://apifoodrym20220613224818.azurewebsites.net/`;

  constructor(private httpClient: HttpClient) { }

  getPages(): Array<any> {
    return this.pages;
  }

  postFood(data: any): void {

  }

  GetAllRestaurant() {
    return this.httpClient.get(this.baseUrl+`Allrestaurant`)
  }

  GetRestaurant(restaurantId: string){
    return this.httpClient.get(this.baseUrl+`restaurant/${restaurantId}`)
  }

  GetAllAvailableFood(restaurantId: string, params: any): Observable<any> {
    return this.httpClient.get(this.baseUrl+`food/restaurant/${restaurantId}`, {
      params: {
        "Available": params.Available
      },
    })



  }

}
