import { Component, OnInit } from '@angular/core';

import { AlertService, PermissionsService } from '../../_services/index';

@Component({
  selector: 'app-create-permissions',
  templateUrl: './create-permissions.component.html'
})
export class CreatePermissionsComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private alertService: AlertService, private permissionsService: PermissionsService) { }

  ngOnInit() {
  }


  createPermission() {
      this.loading = true;
      this.permissionsService.create(this.model)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('Permission created successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
