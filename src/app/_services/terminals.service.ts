import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Terminal } from '../_models/terminal';

@Injectable()
export class TerminalsService {

  public selectedTerminal: Terminal;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Terminal[]>(environment.apiEndpoint + '/terminal');
    }

    getById(id: number) {
        return this.http.get('/api/terminal/' + id);
    }

    create(terminal: Terminal) {
        return this.http.post(environment.apiEndpoint + '/terminal', terminal);
    }

    update(terminal: Terminal) {
        return this.http.put(environment.apiEndpoint + '/terminal/' + terminal.id, terminal);
    }

    delete(id: number) {
        return this.http.delete(environment.apiEndpoint + '/terminal/' + id);
    }
}
