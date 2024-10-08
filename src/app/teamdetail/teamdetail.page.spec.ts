import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamdetailPage } from './teamdetail.page';

describe('TeamdetailPage', () => {
  let component: TeamdetailPage;
  let fixture: ComponentFixture<TeamdetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeamdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
