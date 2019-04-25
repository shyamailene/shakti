/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { ShaktiTestModule } from '../../../test.module';
import { SignupDeleteDialogComponent } from 'app/entities/signup/signup-delete-dialog.component';
import { SignupService } from 'app/entities/signup/signup.service';

describe('Component Tests', () => {
    describe('Signup Management Delete Component', () => {
        let comp: SignupDeleteDialogComponent;
        let fixture: ComponentFixture<SignupDeleteDialogComponent>;
        let service: SignupService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ShaktiTestModule],
                declarations: [SignupDeleteDialogComponent]
            })
                .overrideTemplate(SignupDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(SignupDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SignupService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
