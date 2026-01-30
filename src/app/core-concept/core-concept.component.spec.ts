import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreConceptComponent } from './core-concept.component';

describe('CoreConceptComponent', () => {
  let component: CoreConceptComponent;
  let fixture: ComponentFixture<CoreConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreConceptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
