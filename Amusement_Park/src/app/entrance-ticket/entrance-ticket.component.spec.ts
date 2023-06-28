import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceTicketComponent } from './entrance-ticket.component';

describe('EntranceTicketComponent', () => {
  let component: EntranceTicketComponent;
  let fixture: ComponentFixture<EntranceTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntranceTicketComponent]
    });
    fixture = TestBed.createComponent(EntranceTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
