/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ShaktiTestModule } from '../../../test.module';
import { RangoliDetailComponent } from 'app/entities/rangoli/rangoli-detail.component';
import { Rangoli } from 'app/shared/model/rangoli.model';

describe('Component Tests', () => {
    describe('Rangoli Management Detail Component', () => {
        let comp: RangoliDetailComponent;
        let fixture: ComponentFixture<RangoliDetailComponent>;
        const route = ({ data: of({ rangoli: new Rangoli(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ShaktiTestModule],
                declarations: [RangoliDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(RangoliDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(RangoliDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.rangoli).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
