import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  data: any = {
    email: '',
    password: '',
    tab1: {
      address: '',
      postalCode: ''
    },
    isRememberMe: true
  };

  private readonly orig_body_className = document.body.className;

  form!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_className;
  }

  doLogin(form: NgForm) {
    if (form.valid) {
      localStorage.setItem('apikey', 'TEST');
      var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigateByUrl(returnUrl);
    }
  }

  isInvalid(control: NgModel, form: NgForm) {
    return control.invalid && (control.touched || form.submitted);
  }

  isValid(control: NgModel) {
    return control.valid;
  }

  disableField(control: NgModel) {
    if (control.disabled) {
      control.control.enable();
    } else {
      control.control.disable();
    }
  }
}
