import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsHistorialComponent } from './gifs-historial.component';

describe('GifsHistorialComponent', () => {
  let component: GifsHistorialComponent;
  let fixture: ComponentFixture<GifsHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsHistorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
