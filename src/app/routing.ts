import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'folder/Inbox',
      pathMatch: 'full'
    },
    {
      path: 'folder/:id',
      loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
    }
  ];
  