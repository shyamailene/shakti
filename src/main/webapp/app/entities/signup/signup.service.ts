import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ISignup } from 'app/shared/model/signup.model';

type EntityResponseType = HttpResponse<ISignup>;
type EntityArrayResponseType = HttpResponse<ISignup[]>;

@Injectable({ providedIn: 'root' })
export class SignupService {
    private resourceUrl = SERVER_API_URL + 'api/signups';

    constructor(private http: HttpClient) {}

    create(signup: ISignup): Observable<EntityResponseType> {
        return this.http.post<ISignup>(this.resourceUrl, signup, { observe: 'response' });
    }

    update(signup: ISignup): Observable<EntityResponseType> {
        return this.http.put<ISignup>(this.resourceUrl, signup, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ISignup>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ISignup[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
