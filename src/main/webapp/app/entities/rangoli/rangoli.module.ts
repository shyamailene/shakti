import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShaktiSharedModule } from 'app/shared';
import {
    RangoliComponent,
    RangoliDetailComponent,
    RangoliUpdateComponent,
    RangoliDeletePopupComponent,
    RangoliDeleteDialogComponent,
    rangoliRoute,
    rangoliPopupRoute
} from './';

const ENTITY_STATES = [...rangoliRoute, ...rangoliPopupRoute];

@NgModule({
    imports: [ShaktiSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RangoliComponent,
        RangoliDetailComponent,
        RangoliUpdateComponent,
        RangoliDeleteDialogComponent,
        RangoliDeletePopupComponent
    ],
    entryComponents: [RangoliComponent, RangoliUpdateComponent, RangoliDeleteDialogComponent, RangoliDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShaktiRangoliModule {}
