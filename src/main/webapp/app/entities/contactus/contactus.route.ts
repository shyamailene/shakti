import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contactus } from 'app/shared/model/contactus.model';
import { ContactusService } from './contactus.service';
import { ContactusComponent } from './contactus.component';
import { ContactusDetailComponent } from './contactus-detail.component';
import { ContactusUpdateComponent } from './contactus-update.component';
import { ContactusDeletePopupComponent } from './contactus-delete-dialog.component';
import { IContactus } from 'app/shared/model/contactus.model';

@Injectable({ providedIn: 'root' })
export class ContactusResolve implements Resolve<IContactus> {
    constructor(private service: ContactusService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((contactus: HttpResponse<Contactus>) => contactus.body));
        }
        return of(new Contactus());
    }
}

export const contactusRoute: Routes = [
    {
        path: 'contactus',
        component: ContactusComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.contactus.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'contactus/:id/view',
        component: ContactusDetailComponent,
        resolve: {
            contactus: ContactusResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.contactus.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'contactus/new',
        component: ContactusUpdateComponent,
        resolve: {
            contactus: ContactusResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.contactus.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'contactus/:id/edit',
        component: ContactusUpdateComponent,
        resolve: {
            contactus: ContactusResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.contactus.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const contactusPopupRoute: Routes = [
    {
        path: 'contactus/:id/delete',
        component: ContactusDeletePopupComponent,
        resolve: {
            contactus: ContactusResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'shaktiApp.contactus.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
