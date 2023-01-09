import { HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{

  constructor(private http:CartService ) { } 

  ngOnInit(){
    
  }

  getCartItems(){
    return this.cart.get('https://dummyjson.com/carts')
  }
}
