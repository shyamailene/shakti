import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ShaktiFundraiserModule } from './fundraiser/fundraiser.module';
import { ShaktiRangoliModule } from './rangoli/rangoli.module';
import { ShaktiPaymentModule } from './payment/payment.module';
import { ShaktiSignupModule } from './signup/signup.module';
import { ShaktiContactusModule } from './contactus/contactus.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        ShaktiFundraiserModule,
        ShaktiRangoliModule,
        ShaktiPaymentModule,
        ShaktiSignupModule,
        ShaktiContactusModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShaktiEntityModule {}
