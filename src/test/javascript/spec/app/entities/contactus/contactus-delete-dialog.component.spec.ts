/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { ShaktiTestModule } from '../../../test.module';
import { ContactusDeleteDialogComponent } from 'app/entities/contactus/contactus-delete-dialog.component';
import { ContactusService } from 'app/entities/contactus/contactus.service';

describe('Component Tests', () => {
    describe('Contactus Management Delete Component', () => {
        let comp: ContactusDeleteDialogComponent;
        let fixture: ComponentFixture<ContactusDeleteDialogComponent>;
        let service: ContactusService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ShaktiTestModule],
                declarations: [ContactusDeleteDialogComponent]
            })
                .overrideTemplate(ContactusDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ContactusDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ContactusService);
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
