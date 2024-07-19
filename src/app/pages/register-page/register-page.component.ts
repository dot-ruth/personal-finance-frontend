import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { merge } from 'rxjs';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent {
 readonly email = new FormControl('',[
  Validators.required,
  Validators.email
 ])

 readonly password = new FormControl('',[Validators.required ])

 readonly confirmpassword = new FormControl('', [Validators.required])

 errorMessage = signal('')

 constructor( ) {
  merge(this.email.statusChanges, this.email.valueChanges)
  .pipe(takeUntilDestroyed())
  .subscribe(()=>this.updateErrorMessage())
 }

 updateErrorMessage(){
  if(this.email.hasError('required')){
    this.errorMessage.set('You Must enter a value');
  }else if ( this.email.hasError('email')){
    this.errorMessage.set('Not a Valid Email');
  }else if ( this.password.hasError('required')){
    this.errorMessage.set('Please enter password')
  }else if ( this.confirmpassword.hasError('required') ){
    this.errorMessage.set('Please confirm your password')
  }else if( this.password !== this.confirmpassword) {
    this.errorMessage.set('Confirm password doesnot match you password')
  }else{
    this.errorMessage.set('')
  }
 }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  Register() { }
}
