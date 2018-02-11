import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Domain } from '../_models/domain';

@Injectable()
export class DomainService {

  public selectedDomain: Domain;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Domain[]>(environment.apiEndpoint + '/domain');
    }

    getById(id: number) {
        return this.http.get('/api/domain/' + id);
    }

    create(user: Domain) {
        return this.http.post(environment.apiEndpoint + '/domain', user);
    }

    update(domain: Domain) {
        return this.http.put(environment.apiEndpoint + '/domain/' + domain.id, domain);
    }

    delete(id: number) {
      console.log('got id in service - ' + id)
        return this.http.delete(environment.apiEndpoint + '/domain/' + id);
    }
}
