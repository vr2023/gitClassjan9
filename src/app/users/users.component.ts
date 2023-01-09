import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userDetails:any;
constructor(private apiservice:ApiServiceService){

}

  ngOnInit() {
   this.getUsersdetails(); 
  }

  getUsersdetails(){
    this.apiservice.getUsers().subscribe(res=>{
      console.log(res );
      this.userDetails = res;
    })
  }




}
