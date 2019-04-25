import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IRangoli } from 'app/shared/model/rangoli.model';

type EntityResponseType = HttpResponse<IRangoli>;
type EntityArrayResponseType = HttpResponse<IRangoli[]>;

@Injectable({ providedIn: 'root' })
export class RangoliService {
    private resourceUrl = SERVER_API_URL + 'api/rangolis';

    constructor(private http: HttpClient) {}

    create(rangoli: IRangoli): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(rangoli);
        return this.http
            .post<IRangoli>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(rangoli: IRangoli): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(rangoli);
        return this.http
            .put<IRangoli>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IRangoli>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IRangoli[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(rangoli: IRangoli): IRangoli {
        const copy: IRangoli = Object.assign({}, rangoli, {
            subdate: rangoli.subdate != null && rangoli.subdate.isValid() ? rangoli.subdate.format(DATE_FORMAT) : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.subdate = res.body.subdate != null ? moment(res.body.subdate) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((rangoli: IRangoli) => {
            rangoli.subdate = rangoli.subdate != null ? moment(rangoli.subdate) : null;
        });
        return res;
    }
}
