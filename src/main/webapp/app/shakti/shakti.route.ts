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
	{ path: 'home',             component: HomeComponent },
    { path: 'ourstory',         component: OurstoryComponent },
	{ path: 'executive',        component: ExecutiveComponent },	
	{ path: 'logo',          	component: LogoComponent },
	{ path: 'events',         	component: EventsComponent },
	{ path: 'partners',         component: PartnersComponent },
    { path: 'signup',           component: SignupComponent },
	{ path: 'rangoli',           component: RangoliComponent },
	{ path: 'rangolis',           component: RangolisComponent },
	{ path: 'fundraiser',           component: FundraiserComponent },
	{ path: 'fundraisers',           component: FundraisersComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }

];

