import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { FlotChartDirective } from '../../components/charts/flotChart';

import { UserService } from '../../_services/index';
import { User } from '../../_models/index';

declare var jQuery:any;


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html'
})
export class ListUsersComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  users: User[] = [];

constructor(private http: HttpClient,private router: Router,
  private userService: UserService,
  private route: ActivatedRoute,) {}



  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
  }

  editUser(user: User){
    this.userService.selectedUser = user;
    this.router.navigate(['../edit'], { relativeTo: this.route });
  }

  deleteUser(id: number){
    this.userService.delete(id)
        .subscribe(
            data => {
                this.userService.getAll().subscribe(users => { this.users = users; });
            },
            error => {
            });
  }

}
