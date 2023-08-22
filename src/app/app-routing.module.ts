import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CustomPreloadingStrategyService } from 'src/app/services/custom-preloading-strategy.service';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { adminGuard } from './guards/admin.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(module => module.WebsiteModule),
    data: {
      preload: true,
    }
  },
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then(module => module.CmsModule),
    canActivate: [ adminGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
      preloadingStrategy: QuicklinkStrategy,
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
