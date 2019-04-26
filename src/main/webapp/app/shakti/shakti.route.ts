import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExecutiveComponent } from './executive/executive.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { LogoComponent } from './logo/logo.component';
import { EventsComponent } from './events/events.component';
import { PartnersComponent } from './partners/partners.component';
import { SignupComponent } from './signup/signup.component';
import { RangoliComponent } from './rangoli/rangoli.component';
import { RangolisComponent } from './rangoli/rangolis.component';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { FundraisersComponent } from './fundraiser/fundraisers.component';

export const shaktiRoute: Routes = [
	{ path: 'home', component: HomeComponent, data: {pageTitle: 'shaktiApp'} },
    { path: 'ourstory', component: OurstoryComponent, data: {pageTitle: 'shaktiApp'}  },
	{ path: 'executive', component: ExecutiveComponent, data: {pageTitle: 'shaktiApp'}  },	
	{ path: 'logo', component: LogoComponent, data: {pageTitle: 'shaktiApp'}  },
	{ path: 'events', component: EventsComponent, data: {pageTitle: 'shaktiApp'}  },
	{ path: 'partners', component: PartnersComponent, data: {pageTitle: 'shaktiApp'}  },
    { path: 'signup', component: SignupComponent, data: {pageTitle: 'shaktiApp1'}  },
	{ path: 'rangoli', component: RangoliComponent, data: {pageTitle: 'shaktiApp'}  },
	{ path: 'rangolis', component: RangolisComponent, data: {pageTitle: 'shaktiApp'}  },
	{ path: 'fundraiser', component: FundraiserComponent, data: {pageTitle: 'shaktiApp'}  },
	{ path: 'fundraisers', component: FundraisersComponent, data: {pageTitle: 'shaktiApp'}  },
    { path: '', redirectTo: 'home', pathMatch: 'full', data: {pageTitle: 'shaktiApp'} }

];

