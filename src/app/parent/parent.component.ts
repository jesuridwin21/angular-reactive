import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentitem = "coffee";
  items = ['milk', 'tea', 'coffee', 'juice'];

  additem(newitem: string) {
    this.items.push(newitem);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
