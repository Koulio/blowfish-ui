import { Component, OnInit } from '@angular/core';

import { AlertService, RoleService } from '../../_services/index';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html'
})
export class CreateRoleComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private alertService: AlertService, private roleService: RoleService) { }

  ngOnInit() {
  }


  createRole() {
      this.loading = true;
      this.roleService.create(this.model)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('Role created successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
