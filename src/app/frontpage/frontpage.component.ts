import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  registerForm!: any;
    submitted = false;

  constructor(private Router:Router,private Route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
        let data: any = this.registerForm.value;
      this.Router.navigate(['/Signup'],{
        queryParams:{data:JSON.stringify(SignupComponent)}
      })
  }

}
