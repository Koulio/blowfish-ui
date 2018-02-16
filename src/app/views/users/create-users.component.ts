import { Component, OnInit } from '@angular/core';

import { AlertService, UserService, RoleService , DomainService} from '../../_services/index';
import { Role ,Domain} from '../../_models/index';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html'
})
export class CreateUsersComponent implements OnInit {

  model: any = {};
  loading = false;
  roles: Role[] = [];
  domains: Domain[] = [];
  selectedDomainId: any = {};
  selectedRoleId: any = {};

  constructor(private alertService: AlertService, private userService: UserService
    ,private roleService: RoleService, private domainService: DomainService) { }

  ngOnInit() {
    this.loadAllRoles();
    this.loadAllDomain();
  }

  private loadAllRoles() {
      this.roleService.getAll().subscribe(roles => {
         this.roles = roles; console.log(JSON.stringify(this.roles ));
       });
  }

  private loadAllDomain() {
      this.domainService.getAll().subscribe(domains => { this.domains = domains; console.log(JSON.stringify(this.domains ));});
  }


  createUser() {
      this.loading = true;
      this.model.domainId = this.selectedDomainId;
      this.model.roleId = this.selectedRoleId;
      this.userService.create(this.model)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('User created successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
