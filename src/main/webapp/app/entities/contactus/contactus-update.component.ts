import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IContactus } from 'app/shared/model/contactus.model';
import { ContactusService } from './contactus.service';

@Component({
    selector: 'jhi-contactus-update',
    templateUrl: './contactus-update.component.html'
})
export class ContactusUpdateComponent implements OnInit {
    private _contactus: IContactus;
    isSaving: boolean;

    constructor(private contactusService: ContactusService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ contactus }) => {
            this.contactus = contactus;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.contactus.id !== undefined) {
            this.subscribeToSaveResponse(this.contactusService.update(this.contactus));
        } else {
            this.subscribeToSaveResponse(this.contactusService.create(this.contactus));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IContactus>>) {
        result.subscribe((res: HttpResponse<IContactus>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get contactus() {
        return this._contactus;
    }

    set contactus(contactus: IContactus) {
        this._contactus = contactus;
    }
}
