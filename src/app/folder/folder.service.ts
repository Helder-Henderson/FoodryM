import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FolderService {

  constructor(private _client : HttpClient) { }

  public AdicionarPedido() {
    //Methodo post
  }

}
