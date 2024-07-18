import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let location:Location = TestBed.inject(Location)

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('redirect to login', () => {
  let button = fixture.debugElement.query(By.css('#loginButton')).nativeElement;
  button.click();
  expect(location.path()).toBe('/login');
  })

  it('redirect to registration', () => {
    let button = fixture.debugElement.query(By.css('#registerButton')).nativeElement;
    button.click();
    expect(location.path()).toBe('/register');
   
  })
});
