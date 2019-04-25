import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShaktiSharedModule } from 'app/shared';
import {
    ContactusComponent,
    ContactusDetailComponent,
    ContactusUpdateComponent,
    ContactusDeletePopupComponent,
    ContactusDeleteDialogComponent,
    contactusRoute,
    contactusPopupRoute
} from './';

const ENTITY_STATES = [...contactusRoute, ...contactusPopupRoute];

@NgModule({
    imports: [ShaktiSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ContactusComponent,
        ContactusDetailComponent,
        ContactusUpdateComponent,
        ContactusDeleteDialogComponent,
        ContactusDeletePopupComponent
    ],
    entryComponents: [ContactusComponent, ContactusUpdateComponent, ContactusDeleteDialogComponent, ContactusDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShaktiContactusModule {}
