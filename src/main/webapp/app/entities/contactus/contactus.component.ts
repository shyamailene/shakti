import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IContactus } from 'app/shared/model/contactus.model';
import { Principal } from 'app/core';
import { ContactusService } from './contactus.service';

@Component({
    selector: 'jhi-contactus',
    templateUrl: './contactus.component.html'
})
export class ContactusComponent implements OnInit, OnDestroy {
    contactuses: IContactus[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private contactusService: ContactusService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.contactusService.query().subscribe(
            (res: HttpResponse<IContactus[]>) => {
                this.contactuses = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInContactuses();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IContactus) {
        return item.id;
    }

    registerChangeInContactuses() {
        this.eventSubscriber = this.eventManager.subscribe('contactusListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
