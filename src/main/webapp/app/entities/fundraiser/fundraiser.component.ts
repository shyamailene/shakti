import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IFundraiser } from 'app/shared/model/fundraiser.model';
import { Principal } from 'app/core';
import { FundraiserService } from './fundraiser.service';

@Component({
    selector: 'jhi-fundraiser',
    templateUrl: './fundraiser.component.html'
})
export class FundraiserComponent implements OnInit, OnDestroy {
    fundraisers: IFundraiser[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private fundraiserService: FundraiserService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.fundraiserService.query().subscribe(
            (res: HttpResponse<IFundraiser[]>) => {
                this.fundraisers = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInFundraisers();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IFundraiser) {
        return item.id;
    }

    registerChangeInFundraisers() {
        this.eventSubscriber = this.eventManager.subscribe('fundraiserListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
