import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IContactus } from 'app/shared/model/contactus.model';

@Component({
    selector: 'jhi-contactus-detail',
    templateUrl: './contactus-detail.component.html'
})
export class ContactusDetailComponent implements OnInit {
    contactus: IContactus;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ contactus }) => {
            this.contactus = contactus;
        });
    }

    previousState() {
        window.history.back();
    }
}
