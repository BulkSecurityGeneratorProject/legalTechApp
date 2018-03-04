/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { LegalTechAppTestModule } from '../../../test.module';
import { RequestStatusLogDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/request-status-log/request-status-log-delete-dialog.component';
import { RequestStatusLogService } from '../../../../../../main/webapp/app/entities/request-status-log/request-status-log.service';

describe('Component Tests', () => {

    describe('RequestStatusLog Management Delete Component', () => {
        let comp: RequestStatusLogDeleteDialogComponent;
        let fixture: ComponentFixture<RequestStatusLogDeleteDialogComponent>;
        let service: RequestStatusLogService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [LegalTechAppTestModule],
                declarations: [RequestStatusLogDeleteDialogComponent],
                providers: [
                    RequestStatusLogService
                ]
            })
            .overrideTemplate(RequestStatusLogDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(RequestStatusLogDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RequestStatusLogService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
