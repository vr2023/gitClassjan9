import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceBookComponent } from './face-book/face-book.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxUiLoaderModule, NgxUiLoaderRouterModule ,NgxUiLoaderHttpModule} from "ngx-ui-loader";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { ApiServiceService } from './api-service.service';
import {HttpClientModule} from '@angular/common/http';

import { AlbumsComponent } from './albums/albums.component'
import { AlbumServiceService } from './album-service.service';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
@NgModule({
  declarations: [
    AppComponent,
    FaceBookComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    UsersComponent,  
    AlbumsComponent, ProductComponent, HeaderComponent, CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule.forRoot({ showForeground: true }),
     NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    HttpClientModule
  ],
  providers: [ApiServiceService,AlbumServiceService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
