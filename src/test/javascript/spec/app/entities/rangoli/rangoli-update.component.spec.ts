/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ShaktiTestModule } from '../../../test.module';
import { RangoliUpdateComponent } from 'app/entities/rangoli/rangoli-update.component';
import { RangoliService } from 'app/entities/rangoli/rangoli.service';
import { Rangoli } from 'app/shared/model/rangoli.model';

describe('Component Tests', () => {
    describe('Rangoli Management Update Component', () => {
        let comp: RangoliUpdateComponent;
        let fixture: ComponentFixture<RangoliUpdateComponent>;
        let service: RangoliService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ShaktiTestModule],
                declarations: [RangoliUpdateComponent]
            })
                .overrideTemplate(RangoliUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(RangoliUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RangoliService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Rangoli(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.rangoli = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Rangoli();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.rangoli = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
