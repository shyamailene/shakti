import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IFundraiser } from 'app/shared/model/fundraiser.model';

type EntityResponseType = HttpResponse<IFundraiser>;
type EntityArrayResponseType = HttpResponse<IFundraiser[]>;

@Injectable({ providedIn: 'root' })
export class FundraiserService {
    private resourceUrl = SERVER_API_URL + 'api/fundraisers';

    constructor(private http: HttpClient) {}

    create(fundraiser: IFundraiser): Observable<EntityResponseType> {
        return this.http.post<IFundraiser>(this.resourceUrl, fundraiser, { observe: 'response' });
    }

    update(fundraiser: IFundraiser): Observable<EntityResponseType> {
        return this.http.put<IFundraiser>(this.resourceUrl, fundraiser, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IFundraiser>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IFundraiser[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
