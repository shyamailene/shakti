/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ShaktiTestModule } from '../../../test.module';
import { SignupUpdateComponent } from 'app/entities/signup/signup-update.component';
import { SignupService } from 'app/entities/signup/signup.service';
import { Signup } from 'app/shared/model/signup.model';

describe('Component Tests', () => {
    describe('Signup Management Update Component', () => {
        let comp: SignupUpdateComponent;
        let fixture: ComponentFixture<SignupUpdateComponent>;
        let service: SignupService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ShaktiTestModule],
                declarations: [SignupUpdateComponent]
            })
                .overrideTemplate(SignupUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(SignupUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SignupService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Signup(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.signup = entity;
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
                    const entity = new Signup();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.signup = entity;
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
