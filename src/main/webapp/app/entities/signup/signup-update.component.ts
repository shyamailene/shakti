import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISignup } from 'app/shared/model/signup.model';
import { SignupService } from './signup.service';

@Component({
    selector: 'jhi-signup-update',
    templateUrl: './signup-update.component.html'
})
export class SignupUpdateComponent implements OnInit {
    private _signup: ISignup;
    isSaving: boolean;

    constructor(private signupService: SignupService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ signup }) => {
            this.signup = signup;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.signup.id !== undefined) {
            this.subscribeToSaveResponse(this.signupService.update(this.signup));
        } else {
            this.subscribeToSaveResponse(this.signupService.create(this.signup));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ISignup>>) {
        result.subscribe((res: HttpResponse<ISignup>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get signup() {
        return this._signup;
    }

    set signup(signup: ISignup) {
        this._signup = signup;
    }
}
