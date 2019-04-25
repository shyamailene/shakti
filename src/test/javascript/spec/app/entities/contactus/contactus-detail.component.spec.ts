/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ShaktiTestModule } from '../../../test.module';
import { ContactusDetailComponent } from 'app/entities/contactus/contactus-detail.component';
import { Contactus } from 'app/shared/model/contactus.model';

describe('Component Tests', () => {
    describe('Contactus Management Detail Component', () => {
        let comp: ContactusDetailComponent;
        let fixture: ComponentFixture<ContactusDetailComponent>;
        const route = ({ data: of({ contactus: new Contactus(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ShaktiTestModule],
                declarations: [ContactusDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(ContactusDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ContactusDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.contactus).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
