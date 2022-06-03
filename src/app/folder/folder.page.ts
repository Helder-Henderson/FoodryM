import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FolderService } from './folder.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private service : FolderService ) { }

  public adicionarPedido() {
    this.service.AdicionarPedido
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}