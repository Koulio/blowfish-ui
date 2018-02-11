import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { FlotChartDirective } from '../../components/charts/flotChart';

import { RoleService } from '../../_services/index';
import { Role } from '../../_models/index';

declare var jQuery:any;


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html'
})
export class ListRoleComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  roles: Role[] = [];

constructor(private http: HttpClient,private router: Router,
  private roleService: RoleService,
  private route: ActivatedRoute,) {}



  ngOnInit() {
    this.loadAllRoles();
  }

  private loadAllRoles() {
      this.roleService.getAll().subscribe(roles => { this.roles = roles; });
  }

  editRole(role: Role){
    this.roleService.selectedRole = role;
    this.router.navigate(['../edit'], { relativeTo: this.route });
  }


  deleteRole(id: number){
    this.roleService.delete(id)
        .subscribe(
            data => {
                this.roleService.getAll().subscribe(roles => { this.roles = roles; });
            },
            error => {
            });
  }

}
