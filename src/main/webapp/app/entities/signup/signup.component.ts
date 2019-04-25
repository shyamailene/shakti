import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ISignup } from 'app/shared/model/signup.model';
import { Principal } from 'app/core';
import { SignupService } from './signup.service';

@Component({
    selector: 'jhi-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit, OnDestroy {
    signups: ISignup[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private signupService: SignupService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.signupService.query().subscribe(
            (res: HttpResponse<ISignup[]>) => {
                this.signups = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInSignups();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ISignup) {
        return item.id;
    }

    registerChangeInSignups() {
        this.eventSubscriber = this.eventManager.subscribe('signupListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
