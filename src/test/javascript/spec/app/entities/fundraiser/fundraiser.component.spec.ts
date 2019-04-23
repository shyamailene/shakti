/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ShaktiTestModule } from '../../../test.module';
import { FundraiserComponent } from 'app/entities/fundraiser/fundraiser.component';
import { FundraiserService } from 'app/entities/fundraiser/fundraiser.service';
import { Fundraiser } from 'app/shared/model/fundraiser.model';

describe('Component Tests', () => {
    describe('Fundraiser Management Component', () => {
        let comp: FundraiserComponent;
        let fixture: ComponentFixture<FundraiserComponent>;
        let service: FundraiserService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ShaktiTestModule],
                declarations: [FundraiserComponent],
                providers: []
            })
                .overrideTemplate(FundraiserComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(FundraiserComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FundraiserService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Fundraiser(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.fundraisers[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
