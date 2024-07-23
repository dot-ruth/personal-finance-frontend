import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-add-account',
  standalone: true,
  imports: [ 
    ReactiveFormsModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.scss',
})
export class AddAccountComponent {

  addAccountForm = new FormGroup({
    accountName : new FormControl ('',[Validators.required]),
    accountColor : new FormControl ('',[Validators.required]),
    accountAmount : new FormControl ('',[Validators.required])
  })  

  addAccount() {
    console.log("Account Added")
  }

}
