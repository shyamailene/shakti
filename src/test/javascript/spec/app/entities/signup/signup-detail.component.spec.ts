/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ShaktiTestModule } from '../../../test.module';
import { SignupDetailComponent } from 'app/entities/signup/signup-detail.component';
import { Signup } from 'app/shared/model/signup.model';

describe('Component Tests', () => {
    describe('Signup Management Detail Component', () => {
        let comp: SignupDetailComponent;
        let fixture: ComponentFixture<SignupDetailComponent>;
        const route = ({ data: of({ signup: new Signup(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ShaktiTestModule],
                declarations: [SignupDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(SignupDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SignupDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.signup).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
