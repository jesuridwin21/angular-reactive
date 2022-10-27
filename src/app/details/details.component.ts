// import { observable} from 'rxjs'
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

data:any

  constructor( private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.data=JSON.parse(params['data']);
    })
  }

}
