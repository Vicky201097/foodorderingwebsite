import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillvalueComponent } from './billvalue.component';

describe('BillvalueComponent', () => {
  let component: BillvalueComponent;
  let fixture: ComponentFixture<BillvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillvalueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
