import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IContactus } from 'app/shared/model/contactus.model';

type EntityResponseType = HttpResponse<IContactus>;
type EntityArrayResponseType = HttpResponse<IContactus[]>;

@Injectable({ providedIn: 'root' })
export class ContactusService {
    private resourceUrl = SERVER_API_URL + 'api/contactuses';

    constructor(private http: HttpClient) {}

    create(contactus: IContactus): Observable<EntityResponseType> {
        return this.http.post<IContactus>(this.resourceUrl, contactus, { observe: 'response' });
    }

    update(contactus: IContactus): Observable<EntityResponseType> {
        return this.http.put<IContactus>(this.resourceUrl, contactus, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IContactus>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IContactus[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
