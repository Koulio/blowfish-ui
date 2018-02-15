import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html'
})
export class PermissionsComponent  implements OnInit {

  constructor(private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.router.navigate([ 'list'], { relativeTo: this.route })
  }

}
