import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IFundraiser } from 'app/shared/model/fundraiser.model';
import { FundraiserService } from './fundraiser.service';

@Component({
    selector: 'jhi-fundraiser-update',
    templateUrl: './fundraiser-update.component.html'
})
export class FundraiserUpdateComponent implements OnInit {
    private _fundraiser: IFundraiser;
    isSaving: boolean;

    constructor(private fundraiserService: FundraiserService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ fundraiser }) => {
            this.fundraiser = fundraiser;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.fundraiser.id !== undefined) {
            this.subscribeToSaveResponse(this.fundraiserService.update(this.fundraiser));
        } else {
            this.subscribeToSaveResponse(this.fundraiserService.create(this.fundraiser));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IFundraiser>>) {
        result.subscribe((res: HttpResponse<IFundraiser>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get fundraiser() {
        return this._fundraiser;
    }

    set fundraiser(fundraiser: IFundraiser) {
        this._fundraiser = fundraiser;
    }
}
