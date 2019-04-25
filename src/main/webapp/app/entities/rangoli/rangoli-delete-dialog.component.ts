import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IRangoli } from 'app/shared/model/rangoli.model';
import { RangoliService } from './rangoli.service';

@Component({
    selector: 'jhi-rangoli-delete-dialog',
    templateUrl: './rangoli-delete-dialog.component.html'
})
export class RangoliDeleteDialogComponent {
    rangoli: IRangoli;

    constructor(private rangoliService: RangoliService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.rangoliService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'rangoliListModification',
                content: 'Deleted an rangoli'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-rangoli-delete-popup',
    template: ''
})
export class RangoliDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ rangoli }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(RangoliDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.rangoli = rangoli;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
