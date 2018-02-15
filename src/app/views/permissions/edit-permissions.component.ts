import { Component, OnInit } from '@angular/core';

import { AlertService, PermissionsService } from '../../_services/index';

@Component({
  selector: 'app-edit-permissions',
  templateUrl: './edit-permissions.component.html'
})
export class EditPermissionsComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private alertService: AlertService, private permissionsService: PermissionsService) { }

  ngOnInit() {

    if(typeof this.permissionsService.selectedPermission !== "undefined" && this.permissionsService.selectedPermission !== null) {
      this.model = this.permissionsService.selectedPermission;
    }

  }

  editPermission() {
      this.loading = true;
      this.permissionsService.update(this.model)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('Permission edited successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
