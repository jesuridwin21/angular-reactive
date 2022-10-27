import { Component } from '@angular/core';
import { apiservice } from './services/api.service';
import { ClassesComponent } from './classes/classes.component';
// import { comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactivefrm14';

  constructor(private apiservice: apiservice) {
    
    // this.apiservice.getcomments().subscribe(data=>{
    //   console.log(data)
    // })
    
  }

  // lstcomments!: ClassesComponent[];
  // ngOnInit() {
  //   this.apiservice.getcomments()
  //   .subscribe
  //   (
  //     data=>
  //     {
  //       this.lstcomments = data;
  //     }
  //   );
  // }
}
