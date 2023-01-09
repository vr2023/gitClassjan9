import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaceBookComponent } from './face-book/face-book.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  
  {
    path:'fb',component:FaceBookComponent  
  },
  {
    path:'login',component:LoginComponent
  },
  // {
  //   path:'dashboard',component:DashboardComponent
  // },
  {
    path:'profile',component:ProfileComponent
  },{
    path:'users',component:UsersComponent
  },{
    path:'albums',component:AlbumsComponent
  },{
    path:'product/:id',component:ProductComponent
  },{
    path:'cart',component:CartComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
