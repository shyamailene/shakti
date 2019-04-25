import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Signup } from 'app/shared/model/signup.model';
import { SignupService } from './signup.service';
import { SignupComponent } from './signup.component';
import { SignupDetailComponent } from './signup-detail.component';
import { SignupUpdateComponent } from './signup-update.component';
import { SignupDeletePopupComponent } from './signup-delete-dialog.component';
import { ISignup } from 'app/shared/model/signup.model';

@Injectable({ providedIn: 'root' })
export class SignupResolve implements Resolve<ISignup> {
    constructor(private service: SignupService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((signup: HttpResponse<Signup>) => signup.body));
        }
        return of(new Signup());
    }
}

export const signupRoute: Routes = [
    {
        path: 'signup',
        component: SignupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.signup.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'signup/:id/view',
        component: SignupDetailComponent,
        resolve: {
            signup: SignupResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.signup.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'signup/new',
        component: SignupUpdateComponent,
        resolve: {
            signup: SignupResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.signup.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'signup/:id/edit',
        component: SignupUpdateComponent,
        resolve: {
            signup: SignupResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.signup.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const signupPopupRoute: Routes = [
    {
        path: 'signup/:id/delete',
        component: SignupDeletePopupComponent,
        resolve: {
            signup: SignupResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.signup.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
