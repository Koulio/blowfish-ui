import { Component, OnInit } from '@angular/core';

import { AlertService, UserService, RoleService , DomainService} from '../../_services/index';
import { Role ,Domain} from '../../_models/index';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html'
})
export class EditUsersComponent  implements OnInit {

  user: any = {};
  loading = false;
  roles: Role[] = [];
  domains: Domain[] = [];
  selectedDomainId: any = {};
  selectedRoleId: any = {};

  constructor(private alertService: AlertService, private userService: UserService
    ,private roleService: RoleService, private domainService: DomainService) { }

  ngOnInit() {

    if(typeof this.userService.selectedUser!== "undefined" && this.userService.selectedUser !== null) {
      this.user = this.userService.selectedUser;
    }
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


  editUser() {
      this.loading = true;
      this.user.domainId = this.selectedDomainId;
      this.user.roleId = this.selectedRoleId;
      this.userService.update(this.user)
          .subscribe(
              data => {
                  this.loading = false;
                  this.alertService.success('User edited successfully.')
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
