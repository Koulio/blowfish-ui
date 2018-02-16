import { Component, OnInit } from '@angular/core';

import { AlertService, RoleService } from '../../_services/index';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html'
})
export class EditRoleComponent implements OnInit {

  role: any = {};
  loading = false;

  constructor(private alertService: AlertService, private roleService: RoleService) { }

  ngOnInit() {

    if(typeof this.roleService.selectedRole !== "undefined" && this.roleService.selectedRole !== null) {
      this.role = this.roleService.selectedRole;
    }

  }

  editRole() {
      this.loading = true;
      this.roleService.update(this.role)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('Role edited successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
