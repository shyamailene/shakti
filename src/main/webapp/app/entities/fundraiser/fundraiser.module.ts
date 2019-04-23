import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShaktiSharedModule } from 'app/shared';
import {
    FundraiserComponent,
    FundraiserDetailComponent,
    FundraiserUpdateComponent,
    FundraiserDeletePopupComponent,
    FundraiserDeleteDialogComponent,
    fundraiserRoute,
    fundraiserPopupRoute
} from './';

const ENTITY_STATES = [...fundraiserRoute, ...fundraiserPopupRoute];

@NgModule({
    imports: [ShaktiSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FundraiserComponent,
        FundraiserDetailComponent,
        FundraiserUpdateComponent,
        FundraiserDeleteDialogComponent,
        FundraiserDeletePopupComponent
    ],
    entryComponents: [FundraiserComponent, FundraiserUpdateComponent, FundraiserDeleteDialogComponent, FundraiserDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShaktiFundraiserModule {}
