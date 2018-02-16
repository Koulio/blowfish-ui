import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent  implements OnInit {

  constructor(private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.router.navigate([ 'list'], { relativeTo: this.route })
  }

}
