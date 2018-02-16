import { Component, OnInit } from '@angular/core';

import { AlertService, RoleService } from '../../_services/index';
import { PermissionsService } from '../../_services/index';
import { Role,Permission } from '../../_models/index';

@Component({
  selector: 'app-set-role-permissions',
  templateUrl: './set-role-permissions.component.html'
})
export class SetRolePermissionsComponent implements OnInit {

  role: any = {};
  rolePermissions: any[] = [];
  permissions: any[] = [];
  loading = false;


  constructor(private alertService: AlertService, private roleService: RoleService,
    private permissionsService: PermissionsService ) { }

  ngOnInit() {

    if(typeof this.roleService.selectedRole !== "undefined" && this.roleService.selectedRole !== null) {
      this.role = this.roleService.selectedRole;
    }

    this.loadRolePermissions();
    this.loadAllPermissions();


  }

  private loadRolePermissions() {

      this.permissionsService.getByRoleId(this.role.id).subscribe(rolePermissions => { this.rolePermissions = rolePermissions;});
  }

  private loadAllPermissions() {
      this.permissionsService.getAll().subscribe(permissions => { this.permissions = permissions; });
  }

  setRolePermissions() {

    console.log(JSON.stringify(this.permissions));
      // this.loading = true;
      // this.roleService.update(this.role)
      //     .subscribe(
      //         data => {
      //             this.loading = false;
      //             this.alertService.success('Role Permissions updated successfully.')
      //         },
      //         error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         });
  }


}
