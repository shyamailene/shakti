import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage, LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { ShaktiSharedModule } from 'app/shared';
import { ShaktiCoreModule } from 'app/core';
import { ShaktiAppRoutingModule } from './app-routing.module';
import { ShaktiHomeModule } from './home/home.module';
import { ShaktiAccountModule } from './account/account.module';
import { ShaktiEntityModule } from './entities/entity.module';
import { ShaktiNavbarComponent} from './shakti/navbar/navbar.component';
import { ShaktiFooterComponent} from './shakti/footer/footer.component';
import { HomeModule} from './shakti/home/home.module';
import { LogoComponent } from './shakti/logo/logo.component';
import { EventsComponent } from './shakti/events/events.component';
import { PartnersComponent } from './shakti/partners/partners.component';
import { SignupComponent} from './shakti/signup/signup.component';
import { RangoliComponent} from './shakti/rangoli/rangoli.component';
import { RangolisComponent} from './shakti/rangoli/rangolis.component';
import { FundraiserComponent} from './shakti/fundraiser/fundraiser.component';
import { FundraisersComponent} from './shakti/fundraiser/fundraisers.component';
import { AlertComponent} from './shakti/_directives/alert.component';
import * as moment from 'moment';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ActiveMenuDirective, ErrorComponent } from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        ShaktiAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        ShaktiSharedModule,
        ShaktiCoreModule,
        ShaktiHomeModule,
        ShaktiAccountModule,
        ShaktiEntityModule,
        HomeModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent, ShaktiNavbarComponent, ShaktiFooterComponent, SignupComponent, AlertComponent, LogoComponent, EventsComponent, PartnersComponent, RangoliComponent, RangolisComponent, FundraiserComponent, FundraisersComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [LocalStorageService, SessionStorageService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class ShaktiAppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
