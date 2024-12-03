import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProposallistPage } from './proposallist.page';

describe('ProposallistPage', () => {
  let component: ProposallistPage;
  let fixture: ComponentFixture<ProposallistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProposallistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
