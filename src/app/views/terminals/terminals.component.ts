import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html'
})
export class TerminalsComponent  implements OnInit {

  constructor(private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.router.navigate([ 'list'], { relativeTo: this.route })
  }

}
