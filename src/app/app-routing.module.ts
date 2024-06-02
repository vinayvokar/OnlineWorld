import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { TreamComponent } from './tream/tream.component';
import { PickComponent } from './pick/pick.component';

import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RequrimentComponent } from './requriment/requriment.component';
import { IntroComponent } from './intro/intro.component';
import { StepsComponent } from './steps/steps.component';
import { VideoComponent } from './video/video.component';
import { ListComponent } from './list/list.component';
import { DownloadComponent } from './download/download.component';





const routes: Routes = [
  
  {
    path:'',redirectTo:'main',pathMatch:'full'
  },
  {
    path:'main',component:MainComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'team',component:TreamComponent
  },
  {
    path:'pick',component:PickComponent
  },

  {
    path:'login',component:LoginComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'sidebar',component:SidebarComponent
  },
  {
    path:'intro',component:IntroComponent
  },
 {
   path:'requriment',component:RequrimentComponent
 },
  {
    path:'steps',component:StepsComponent
  },
  {
    path:'video',component:VideoComponent
  },
  { 
    path:'list',component:ListComponent
},
{
  path:'download',component:DownloadComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
