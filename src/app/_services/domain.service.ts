import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Domain } from '../_models/domain';

@Injectable()
export class DomainService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Domain[]>('http://localhost:3000/domain');
    }

    getById(id: number) {
        return this.http.get('/api/domain/' + id);
    }

    create(user: Domain) {
        return this.http.post('/api/domain', user);
    }

    update(user: Domain) {
        return this.http.put('/api/domain/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/domain/' + id);
    }
}
