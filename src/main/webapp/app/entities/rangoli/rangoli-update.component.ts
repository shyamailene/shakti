import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IRangoli } from 'app/shared/model/rangoli.model';
import { RangoliService } from './rangoli.service';

@Component({
    selector: 'jhi-rangoli-update',
    templateUrl: './rangoli-update.component.html'
})
export class RangoliUpdateComponent implements OnInit {
    private _rangoli: IRangoli;
    isSaving: boolean;
    subdateDp: any;

    constructor(private rangoliService: RangoliService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ rangoli }) => {
            this.rangoli = rangoli;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.rangoli.id !== undefined) {
            this.subscribeToSaveResponse(this.rangoliService.update(this.rangoli));
        } else {
            this.subscribeToSaveResponse(this.rangoliService.create(this.rangoli));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IRangoli>>) {
        result.subscribe((res: HttpResponse<IRangoli>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get rangoli() {
        return this._rangoli;
    }

    set rangoli(rangoli: IRangoli) {
        this._rangoli = rangoli;
    }
}
