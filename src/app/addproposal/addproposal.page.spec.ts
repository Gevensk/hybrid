import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddproposalPage } from './addproposal.page';

describe('AddproposalPage', () => {
  let component: AddproposalPage;
  let fixture: ComponentFixture<AddproposalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddproposalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
