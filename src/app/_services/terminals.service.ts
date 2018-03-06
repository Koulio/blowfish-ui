import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Terminal } from '../_models/terminal';

@Injectable()
export class TerminalsService {

  public selectedTerminal: Terminal;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Terminal[]>(environment.apiEndpoint + '/terminals');
    }

    getById(id: number) {
        return this.http.get('/api/terminals/' + id);
    }

    create(terminal: Terminal) {
        return this.http.post(environment.apiEndpoint + '/terminals', terminal);
    }

    update(terminal: Terminal) {
        return this.http.put(environment.apiEndpoint + '/terminals/' + terminal.id, terminal);
    }

    delete(id: number) {
        return this.http.delete(environment.apiEndpoint + '/terminals/' + id);
    }
}
