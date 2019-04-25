/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ShaktiTestModule } from '../../../test.module';
import { ContactusComponent } from 'app/entities/contactus/contactus.component';
import { ContactusService } from 'app/entities/contactus/contactus.service';
import { Contactus } from 'app/shared/model/contactus.model';

describe('Component Tests', () => {
    describe('Contactus Management Component', () => {
        let comp: ContactusComponent;
        let fixture: ComponentFixture<ContactusComponent>;
        let service: ContactusService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ShaktiTestModule],
                declarations: [ContactusComponent],
                providers: []
            })
                .overrideTemplate(ContactusComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ContactusComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ContactusService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Contactus(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.contactuses[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
