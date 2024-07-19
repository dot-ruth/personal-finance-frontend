import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';



@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
 
export class RegisterPageComponent {

  registrationForm = new FormGroup ({
     email : new FormControl('',[Validators.required,Validators.email]),
     password : new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20) ]),
     confirmpassword : new FormControl('', [Validators.required,Validators.minLength(8), Validators.maxLength(20)])
  })

  Register() {
    console.log("form submitted")
  }
 
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}
