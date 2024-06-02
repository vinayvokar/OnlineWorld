import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { TreamComponent } from './tream/tream.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

import { PickComponent } from './pick/pick.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IntroComponent } from './intro/intro.component';
import { RequrimentComponent } from './requriment/requriment.component';
import { StepsComponent } from './steps/steps.component';
import { VideoComponent } from './video/video.component';
import { ListComponent } from './list/list.component';
import { DownloadComponent } from './download/download.component';
import { OthersComponent } from './others/others.component';



@NgModule({
  declarations: [
    AppComponent,

    AboutComponent,
    ProductComponent,
    TreamComponent,
    ContactComponent,
    LoginComponent,
    MainComponent,
    PickComponent,
    SidebarComponent,
    IntroComponent,
    RequrimentComponent,
    StepsComponent,
    VideoComponent,
    ListComponent,
    DownloadComponent,
    OthersComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
