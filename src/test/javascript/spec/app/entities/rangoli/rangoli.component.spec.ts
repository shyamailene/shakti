/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ShaktiTestModule } from '../../../test.module';
import { RangoliComponent } from 'app/entities/rangoli/rangoli.component';
import { RangoliService } from 'app/entities/rangoli/rangoli.service';
import { Rangoli } from 'app/shared/model/rangoli.model';

describe('Component Tests', () => {
    describe('Rangoli Management Component', () => {
        let comp: RangoliComponent;
        let fixture: ComponentFixture<RangoliComponent>;
        let service: RangoliService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ShaktiTestModule],
                declarations: [RangoliComponent],
                providers: []
            })
                .overrideTemplate(RangoliComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(RangoliComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RangoliService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Rangoli(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.rangolis[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
