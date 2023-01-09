import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  constructor(private httpps:HttpClient) { }

  getAlbums(){
    return this.httpps.get('https://dummyjson.com/products');
  }


  getProduct(id:any){
    return this.httpps.get('https://dummyjson.com/products/' +id);
  }
}
