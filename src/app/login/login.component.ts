import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

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

  doLogin() {
    localStorage.setItem('apikey', 'TEST');
    var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    this.router.navigateByUrl(returnUrl);
  }

}
