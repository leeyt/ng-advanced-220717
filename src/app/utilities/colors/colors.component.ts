import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  type: string | null = null;
  name: string | null = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.type = this.route.snapshot.paramMap.get('type');
    this.route.paramMap.subscribe(param => {
      this.type = param.get('type');
    });

    this.route.queryParamMap.subscribe(param => {
      this.name = param.get('name');
    })
  }

  incrementType() {
    this.router.navigate(['/utilities/colors', +(this.type ?? 0) + 1 + ''], {
      queryParamsHandling: 'preserve',
    });
  }

  decrementType() {
    this.router.navigate(['/utilities/colors', +(this.type ?? 0) - 1 + ''], {
      queryParamsHandling: 'preserve',
    });
  }
}
