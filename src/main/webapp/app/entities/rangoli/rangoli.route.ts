import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rangoli } from 'app/shared/model/rangoli.model';
import { RangoliService } from './rangoli.service';
import { RangoliComponent } from './rangoli.component';
import { RangoliDetailComponent } from './rangoli-detail.component';
import { RangoliUpdateComponent } from './rangoli-update.component';
import { RangoliDeletePopupComponent } from './rangoli-delete-dialog.component';
import { IRangoli } from 'app/shared/model/rangoli.model';

@Injectable({ providedIn: 'root' })
export class RangoliResolve implements Resolve<IRangoli> {
    constructor(private service: RangoliService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((rangoli: HttpResponse<Rangoli>) => rangoli.body));
        }
        return of(new Rangoli());
    }
}

export const rangoliRoute: Routes = [
    {
        path: 'rangoli',
        component: RangoliComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.rangoli.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'rangoli/:id/view',
        component: RangoliDetailComponent,
        resolve: {
            rangoli: RangoliResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.rangoli.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'rangoli/new',
        component: RangoliUpdateComponent,
        resolve: {
            rangoli: RangoliResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.rangoli.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'rangoli/:id/edit',
        component: RangoliUpdateComponent,
        resolve: {
            rangoli: RangoliResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.rangoli.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const rangoliPopupRoute: Routes = [
    {
        path: 'rangoli/:id/delete',
        component: RangoliDeletePopupComponent,
        resolve: {
            rangoli: RangoliResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.rangoli.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
