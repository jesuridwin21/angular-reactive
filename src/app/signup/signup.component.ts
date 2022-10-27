import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { MustMatch } from '../mustmatch/mustmatch.validator';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,private Router:Router,private Route:ActivatedRoute) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            userName: ['', Validators.required],
            phone: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    get f() { return this.registerForm.controls; }

    numericOnly(event: any) {
      const patt = /^([0-9])$/;
      return patt.test(event.key);
}

    onSubmit() {

    //   if (this.registerForm.invalid) {
    //     return;
    // }
        this.submitted = true;
        let data: any = this.registerForm.value;
      this.Router.navigate(['./details'],{
        queryParams:{data:JSON.stringify(data)}
      })

    
       

  
    //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
    // savecall() {
    //   let data: any = this.registerForm.value;
    //   this.Router.navigate(['details'],{
    //     queryParams:{data:JSON.stringify(data)}
    //   })
    // }
}

