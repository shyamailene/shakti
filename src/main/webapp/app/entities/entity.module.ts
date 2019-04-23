import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ShaktiFundraiserModule } from './fundraiser/fundraiser.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        ShaktiFundraiserModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShaktiEntityModule {}
