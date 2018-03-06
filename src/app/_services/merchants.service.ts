import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Merchant } from '../_models/index';

@Injectable()
export class MerchantsService {

  public selectedMerchant: Merchant;

    constructor(private http: HttpClient) { }


        getAll() {
            return this.http.get<Merchant[]>(environment.apiEndpoint + '/merchants');
        }

        getById(id: number) {
            return this.http.get(environment.apiEndpoint + '/merchants' + id);
        }

        create(merchant: Merchant) {
            return this.http.post(environment.apiEndpoint + '/merchants', merchant);
        }

        update(merchant: Merchant) {
            return this.http.put(environment.apiEndpoint + '/merchants/' + merchant.id, merchant);
        }

        delete(id: number) {
            return this.http.delete(environment.apiEndpoint + '/merchants/' + id);
        }
}
