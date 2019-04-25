import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IRangoli } from 'app/shared/model/rangoli.model';
import { Principal } from 'app/core';
import { RangoliService } from './rangoli.service';

@Component({
    selector: 'jhi-rangoli',
    templateUrl: './rangoli.component.html'
})
export class RangoliComponent implements OnInit, OnDestroy {
    rangolis: IRangoli[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private rangoliService: RangoliService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.rangoliService.query().subscribe(
            (res: HttpResponse<IRangoli[]>) => {
                this.rangolis = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInRangolis();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IRangoli) {
        return item.id;
    }

    registerChangeInRangolis() {
        this.eventSubscriber = this.eventManager.subscribe('rangoliListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
