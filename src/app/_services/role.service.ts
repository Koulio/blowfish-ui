import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Role } from '../_models/role';

@Injectable()
export class RoleService {

  public selectedRole: Role;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Role[]>(environment.apiEndpoint + '/role');
    }

    getById(id: number) {
        return this.http.get('/api/domain/' + id);
    }

    create(role: Role) {
        return this.http.post(environment.apiEndpoint + '/role', role);
    }

    update(role: Role) {
        return this.http.put(environment.apiEndpoint + '/role/' + role.id, role);
    }

    delete(id: number) {
        return this.http.delete(environment.apiEndpoint + '/role/' + id);
    }
}
