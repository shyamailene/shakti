import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IRangoli } from 'app/shared/model/rangoli.model';

@Component({
    selector: 'jhi-rangoli-detail',
    templateUrl: './rangoli-detail.component.html'
})
export class RangoliDetailComponent implements OnInit {
    rangoli: IRangoli;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ rangoli }) => {
            this.rangoli = rangoli;
        });
    }

    previousState() {
        window.history.back();
    }
}
