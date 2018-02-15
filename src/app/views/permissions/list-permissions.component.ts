import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { FlotChartDirective } from '../../components/charts/flotChart';

import { PermissionsService } from '../../_services/index';
import { Permission } from '../../_models/index';

declare var jQuery:any;


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-list-permissions',
  templateUrl: './list-permissions.component.html'
})
export class ListPermissionsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  permissions: Permission[] = [];

constructor(private http: HttpClient,private router: Router,
  private permissionsService: PermissionsService,
  private route: ActivatedRoute,) {}



  ngOnInit() {
    this.loadAllPermissions();
  }

  private loadAllPermissions() {
      this.permissionsService.getAll().subscribe(permissions => { this.permissions = permissions; });
  }

  editPermission(permission: Permission){
    this.permissionsService.selectedPermission = permission;
    this.router.navigate(['../edit'], { relativeTo: this.route });
  }


  deletePermission(id: number){
    this.permissionsService.delete(id)
        .subscribe(
            data => {
                this.permissionsService.getAll().subscribe(permissions => { this.permissions = permissions; });
            },
            error => {
            });
  }

}
