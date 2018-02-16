import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Permission } from '../_models/permission';

@Injectable()
export class PermissionsService {

  public selectedPermission: Permission;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Permission[]>(environment.apiEndpoint + '/permission');
    }

    getById(id: number) {
        return this.http.get('/api/domain/' + id);
    }

    getByRoleId(roleId: number) {
      console.log('Role id - ' + roleId);
        return this.http.get<Permission[]>(environment.apiEndpoint + '/permission?roleId=' + roleId);
    }

    create(permission: Permission) {
        return this.http.post(environment.apiEndpoint + '/permission', permission);
    }

    update(permission: Permission) {
        return this.http.put(environment.apiEndpoint + '/permission/' + permission.id, permission);
    }

    delete(id: number) {
        return this.http.delete(environment.apiEndpoint + '/permission/' + id);
    }
}
