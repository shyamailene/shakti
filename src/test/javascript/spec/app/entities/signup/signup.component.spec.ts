/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { ShaktiTestModule } from '../../../test.module';
import { SignupComponent } from 'app/entities/signup/signup.component';
import { SignupService } from 'app/entities/signup/signup.service';
import { Signup } from 'app/shared/model/signup.model';

describe('Component Tests', () => {
    describe('Signup Management Component', () => {
        let comp: SignupComponent;
        let fixture: ComponentFixture<SignupComponent>;
        let service: SignupService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ShaktiTestModule],
                declarations: [SignupComponent],
                providers: []
            })
                .overrideTemplate(SignupComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(SignupComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SignupService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Signup(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.signups[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
