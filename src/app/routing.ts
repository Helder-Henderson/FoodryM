import { Routes } from '@angular/router';
import { RegisterComponent } from './1 - admin/register/register.component';
import { HomeComponent } from './1 - admin/home/home.component';
import { IndexComponent } from './2 - public/index/index.component';
import { NotfoundComponent } from './2 - public/notfound/notfound.component';

export const routes: Routes = [
    {
      path:"",
      component:IndexComponent
    },
    {
      path:"notFound",
      component:NotfoundComponent
    },
    {
      path: 'register',
      component:RegisterComponent
    },
    {
      path: 'home',
      component:HomeComponent
    },
    {
      path: 'folder/:id',
      loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
    },
    {
      path:"**", // redirect if url is not available or other problem
      redirectTo:"notFound",
      pathMatch:'full'
    }
  ];
  