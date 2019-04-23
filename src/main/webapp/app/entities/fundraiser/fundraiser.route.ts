import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fundraiser } from 'app/shared/model/fundraiser.model';
import { FundraiserService } from './fundraiser.service';
import { FundraiserComponent } from './fundraiser.component';
import { FundraiserDetailComponent } from './fundraiser-detail.component';
import { FundraiserUpdateComponent } from './fundraiser-update.component';
import { FundraiserDeletePopupComponent } from './fundraiser-delete-dialog.component';
import { IFundraiser } from 'app/shared/model/fundraiser.model';

@Injectable({ providedIn: 'root' })
export class FundraiserResolve implements Resolve<IFundraiser> {
    constructor(private service: FundraiserService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((fundraiser: HttpResponse<Fundraiser>) => fundraiser.body));
        }
        return of(new Fundraiser());
    }
}

export const fundraiserRoute: Routes = [
    {
        path: 'fundraiser',
        component: FundraiserComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.fundraiser.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'fundraiser/:id/view',
        component: FundraiserDetailComponent,
        resolve: {
            fundraiser: FundraiserResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.fundraiser.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'fundraiser/new',
        component: FundraiserUpdateComponent,
        resolve: {
            fundraiser: FundraiserResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.fundraiser.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'fundraiser/:id/edit',
        component: FundraiserUpdateComponent,
        resolve: {
            fundraiser: FundraiserResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.fundraiser.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const fundraiserPopupRoute: Routes = [
    {
        path: 'fundraiser/:id/delete',
        component: FundraiserDeletePopupComponent,
        resolve: {
            fundraiser: FundraiserResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.fundraiser.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
