import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumServiceService } from '../album-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
id:any;
product:any;
  constructor(private ActivatedRoute:ActivatedRoute,private ablumService:AlbumServiceService){
 
  }  

  ngOnInit(){
    console.log(this.ActivatedRoute.snapshot.params['id']);
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.getProduct();
  }

  getProduct(){

    this.ablumService.getProduct(this.id).subscribe(res=>{
      console.log(res);
    this.product=res;
    this.urlImg = this.product.thumbnail;  
    })
  }

  urlImg:any;
  changeimage(url:any){
   
      if(url){
       this.urlImg = url;
      }else{
        this.urlImg = this.product.thumbnail;
      }
  }

}
