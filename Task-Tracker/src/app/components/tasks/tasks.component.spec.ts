import { ComponentFixture, TestBed } from '@angular/core/testing';
import { tasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: tasksComponent;
  let fixture: ComponentFixture<tasksComponent
>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [tasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(tasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
