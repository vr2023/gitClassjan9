import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from '../album-service.service';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albumDetails:any;
constructor(private apiPhotosservice:AlbumServiceService,private route :Router){

}
  ngOnInit(){
    this.getAlbumDetails();
  }

  getAlbumDetails(){
    this.apiPhotosservice.getAlbums().subscribe((res:any)=>{
   
    this.albumDetails= res['products'];
    console.log(this.albumDetails);

    this.albumDetails.forEach((element:any) => {
      if (element['description'].length < 60){
        element['description1']=element['description'];
      }else{
        element['description1']=element['description'].substr(0,60)+".......";
      }
      
    });
    
    })
  }


  gotoCard(id:any){
     this.route.navigate(['product/'+id]);
  }


}
