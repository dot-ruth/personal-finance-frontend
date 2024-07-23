import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatIconModule} from '@angular/material/icon';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddAccountComponent } from '../add-account/add-account.component';

@Component({
  selector: 'app-accountcard',
  standalone: true,
  imports: [MatCardModule,FontAwesomeModule,MatIconModule,MatDialogModule],
  templateUrl: './accountcard.component.html',
  styleUrl: './accountcard.component.scss'
})
export class AccountcardComponent {
  faPlusCircle = faPlusCircle
  readonly dialog = inject(MatDialog)

  addAccountDialog(){
     this.dialog.open(AddAccountComponent, {
      height: '60%',
      width: '60%',
    })
  }
}
