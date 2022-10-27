import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-child-items',
  templateUrl: './child-items.component.html',
  styleUrls: ['./child-items.component.css']
})
export class ChildItemsComponent implements OnInit {

  @Input() items = "null";
  @Output() newitemevent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  addnewitem(value: string) {
    this.newitemevent.emit(value);
  }

}
