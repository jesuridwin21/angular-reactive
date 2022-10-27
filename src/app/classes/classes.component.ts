import { Component, OnInit } from '@angular/core';
import { apiservice } from '../services/api.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  getcomments:any;

  constructor(private apiservice:apiservice) {

    this.apiservice.getcomments().subscribe(data=>{
      console.log(data);
      this.getcomments = data;
      
    })
   }
   getuserdata(data:any) {
     console.log(data)
   }

  ngOnInit(): void {
  }

}
