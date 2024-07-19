import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let loginButton:DebugElement;
  let registerButton:DebugElement;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loginButton = fixture.debugElement.query(By.css('#loginButton')); 
    registerButton = fixture.debugElement.query(By.css('#registerButton'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to login',fakeAsync( () => {
  spyOn(component, 'toLogin')
  loginButton.nativeElement.click();
  expect(component.toLogin).toHaveBeenCalled();
  }))

  it('should redirect to registration', () => {
    spyOn(component, 'toRegister')
    registerButton.nativeElement.click();
    expect(component.toRegister).toHaveBeenCalled();
   
  })
});
