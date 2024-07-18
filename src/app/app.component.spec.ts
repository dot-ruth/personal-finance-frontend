import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'personal-finance' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('personal-finance');
  });

  it(`should display the landing page`,()=>{
    let location: Location = TestBed.inject(Location);
    expect(location.path()).toBe('');
  })

  
});
