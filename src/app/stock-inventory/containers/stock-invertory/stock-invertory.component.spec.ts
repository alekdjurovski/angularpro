import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInvertoryComponent } from './stock-invertory.component';

describe('StockInvertoryComponent', () => {
  let component: StockInvertoryComponent;
  let fixture: ComponentFixture<StockInvertoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockInvertoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockInvertoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
