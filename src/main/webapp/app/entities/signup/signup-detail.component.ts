import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISignup } from 'app/shared/model/signup.model';

@Component({
    selector: 'jhi-signup-detail',
    templateUrl: './signup-detail.component.html'
})
export class SignupDetailComponent implements OnInit {
    signup: ISignup;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ signup }) => {
            this.signup = signup;
        });
    }

    previousState() {
        window.history.back();
    }
}
