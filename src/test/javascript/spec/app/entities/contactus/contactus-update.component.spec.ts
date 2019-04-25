/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ShaktiTestModule } from '../../../test.module';
import { ContactusUpdateComponent } from 'app/entities/contactus/contactus-update.component';
import { ContactusService } from 'app/entities/contactus/contactus.service';
import { Contactus } from 'app/shared/model/contactus.model';

describe('Component Tests', () => {
    describe('Contactus Management Update Component', () => {
        let comp: ContactusUpdateComponent;
        let fixture: ComponentFixture<ContactusUpdateComponent>;
        let service: ContactusService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ShaktiTestModule],
                declarations: [ContactusUpdateComponent]
            })
                .overrideTemplate(ContactusUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ContactusUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ContactusService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Contactus(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.contactus = entity;
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
                    const entity = new Contactus();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.contactus = entity;
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
