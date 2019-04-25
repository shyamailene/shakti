import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShaktiSharedModule } from 'app/shared';
import {
    SignupComponent,
    SignupDetailComponent,
    SignupUpdateComponent,
    SignupDeletePopupComponent,
    SignupDeleteDialogComponent,
    signupRoute,
    signupPopupRoute
} from './';

const ENTITY_STATES = [...signupRoute, ...signupPopupRoute];

@NgModule({
    imports: [ShaktiSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [SignupComponent, SignupDetailComponent, SignupUpdateComponent, SignupDeleteDialogComponent, SignupDeletePopupComponent],
    entryComponents: [SignupComponent, SignupUpdateComponent, SignupDeleteDialogComponent, SignupDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShaktiSignupModule {}
